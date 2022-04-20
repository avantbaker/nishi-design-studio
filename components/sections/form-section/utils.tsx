import { FormikErrors, useFormikContext } from 'formik';
import { useState, useEffect } from 'react';
import { formspreeMap } from './formConfigs';

export function useStatus() {
	const { status } = useFormikContext();
	const [showError, setShowError] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	useEffect(() => {
		if (status === FORM_STATUS.FAILED) {
			setShowError(true);
			setTimeout(() => setShowError(false), 3000);
		}
		if (status === FORM_STATUS.SUCCESS) {
			setShowSuccess(true);
			setTimeout(() => setShowSuccess(false), 30000);
		}
	}, [status]);
	return {
		showError,
		showSuccess,
	};
}

const isEmpty = (obj) => Object.keys(obj).length === 0;

const validProjectTypes = [
	'new-construction',
	'large-scale-renovation',
	'small-scale-renovation',
	'interior-design-only',
];

const validateInputFields = (values, errors) => (acc, currentKey) => {
	const currentValue = values[currentKey];
	if (currentKey === 'phone') {
		const validPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
		!currentValue.match(validPhone) && (errors.phone = 'Please enter a valid phone');
	} else if (currentKey === 'email') {
		const validEmail =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		!currentValue.match(validEmail) && (errors.email = 'Please enter a valid email');
	}
	return acc;
};

type ContactFormErrorFields = {
	phone?: string;
	email?: string;
	projectType?: string;
};
export const validateFields = (values): FormikErrors<ContactFormErrorFields> => {
	const errors: FormikErrors<ContactFormErrorFields> = {};
	let errorFields = Object.keys(values).reduce(
		validateInputFields(values, errors),
		errors
	);
	if (validProjectTypes.every((key) => values[key] === '')) {
		errorFields.projectType = 'Please select a project type';
	}
	return errorFields;
};

export function getFormData(values): FormData {
	const formattedValues = formatForFormspree(values);
	var data = new FormData();
	for (var key in formattedValues) {
		data.append(key, formattedValues[key]);
	}
	return data;
}

export const FORM_STATUS = {
	SUCCESS: 'success',
	FAILED: 'failed',
	UNSUBMITTED: 'unsubmitted',
};

export async function handleContactFormSubmit(
	values,
	{ setSubmitting, setErrors, setStatus }
) {
	let errorFields = validateFields(values);
	try {
		if (isEmpty(errorFields)) {
			setSubmitting(true);
			const response = await fetch('https://formspree.io/f/myyonqwq', {
				body: getFormData(values),
				method: 'POST',
				headers: {
					Accept: 'application/json',
				},
			});
			if (!response.ok) {
				throw new Error('Form Submission was Unsuccessful.');
			}
			const { ok } = await response.json();
			if (ok) {
				setStatus(FORM_STATUS.SUCCESS);
			}
		} else {
			setErrors(errorFields);
			setStatus(FORM_STATUS.FAILED);
		}
	} catch (e) {
		setErrors(errorFields);
		setStatus(FORM_STATUS.FAILED);
	}
}

function set(acc, path, value) {
	var schema = acc; // a moving reference to internal objects within obj
	var pList = path.split('.');
	var len = pList.length;
	for (var i = 0; i < len - 1; i++) {
		var elem = pList[i];
		if (!schema[elem]) schema[elem] = {};
		schema = schema[elem];
	}
	schema[pList[len - 1]] = value;
}

function convertToTitleCase(currentValue) {
	const splitValue = currentValue.split('-');
	const valueArray = splitValue.map(
		(word) => word.charAt(0).toUpperCase() + word.substring(1)
	);
	const newValue = valueArray.join(' ');
	return newValue;
}

function convertValuesToString(object) {
	const valueArr = Object.keys(object).reduce((acc, cv) => {
		if (object[cv]) {
			acc.push(convertToTitleCase(object[cv]));
		}
		return acc;
	}, []);
	return valueArr.join(', ');
}

function splitByRegex(field, regex) {
	return field.split(regex).filter((e) => e);
}

function getDeepFieldValue(fn) {
	if (!fn) return false;
	const type1 = /(.*?)\[(.*?)\]/gi;
	const type2 = /(.*?)\[(.*?)\]\[(.*?)\]/gi;
	const deepField = splitByRegex(fn, type1) || splitByRegex(fn, type2);
	return deepField;
}
export const formatForFormspree = (values) => {
	let formspreeObject: any = Object.keys(values).reduce((acc, key) => {
		const currentValue = values[key];
		const fieldName = formspreeMap[key];
		const deepField = getDeepFieldValue(fieldName);
		if (deepField && deepField.length > 1) {
			set(acc, deepField.join('.'), currentValue);
		} else if (!acc[fieldName] && fieldName === 'projectType' && currentValue) {
			acc[fieldName] = convertToTitleCase(currentValue);
		} else if (!acc[fieldName] && fieldName !== 'projectType') {
			acc[fieldName] = currentValue;
		}
		return acc;
	}, {});

	const interiorSpaces = convertValuesToString(formspreeObject.group.interiorSpaces);
	const exteriorSpaces = convertValuesToString(formspreeObject.group.exteriorSpaces);
	const designStyle = convertValuesToString(formspreeObject.group.designStyle);

	formspreeObject = Object.assign({}, formspreeObject, {
		interiorSpaces,
		exteriorSpaces,
		designStyle,
	});

	delete formspreeObject.group;

	return formspreeObject;
};
