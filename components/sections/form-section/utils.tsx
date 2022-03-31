import { formspreeMap } from './formConfigs';

export function getFormData(values): FormData {
	const formattedValues = formatForFormspree(values);
	var data = new FormData();
	for (var key in formattedValues) {
		data.append(key, formattedValues[key]);
	}
	return data;
}

export async function handleSubmit(values, { setSubmitting }) {
	const response = await fetch('https://formspree.io/f/mbjwadpg', {
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
		// setSubmitting to False
		// Show Thank you message
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
