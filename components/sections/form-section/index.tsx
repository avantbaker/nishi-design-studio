import Text from 'components/common/text';
import { States } from 'components/sections/form-section/states';
import { ErrorMessage, Form, useFormikContext } from 'formik';
import { rem } from 'polished';
import { useEffect } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import { designStyles, exteriorSpaces, interiorSpaces, projectType } from './formConfigs';
import {
	FormGroup,
	FormGroupRadio,
	FormGroupThree,
	FormSection,
	FormSubheading,
	RadioInput,
	RadioLabel,
	SelectContainer,
	StyledField,
	StyledSelect,
	FieldWrapper,
	StyledError,
} from './styles';

const Container = styled.section``;

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
`;

function convertToKey(key) {
	return key.toLowerCase().split(' ').join('-');
}

function removeExterior(string = '') {
	const regex = /\sExterior/gi;
	return string.replace(regex, '');
}

function renderFormGroup(formGroup = []) {
	return (
		formGroup.length > 0 &&
		formGroup.map((key, idx) => {
			const fullKey = convertToKey(key);
			return (
				<RadioLabel key={`${fullKey}-${idx}`}>
					<RadioInput type="radio" name={fullKey} value={fullKey} />
					{removeExterior(key)}
				</RadioLabel>
			);
		})
	);
}
export default function FormSectionComponent() {
	const { errors } = useFormikContext();
	useEffect(() => {
		console.log('Errors:', errors);

		return () => {};
	}, [errors]);

	return (
		<Container>
			<StyledForm>
				<FormSection>
					<Text
						mb={[rem(14), rem(14), rem(36)]}
						variant="highlight"
						color={theme.colors.black}
					>
						BASIC CONTACT
					</Text>
					<FormGroup>
						<StyledField type="text" name="firstName" placeholder="First Name" />
						<StyledField type="text" name="lastName" placeholder="Last Name" />
						<FieldWrapper>
							<StyledField type="phone" name="phone" placeholder="Phone Number" />
							<StyledError>
								<ErrorMessage name="phone" />
							</StyledError>
						</FieldWrapper>
						<FieldWrapper>
							<StyledField type="email" name="email" placeholder="Email" />
							<StyledError>
								<ErrorMessage name="email" />
							</StyledError>
						</FieldWrapper>
					</FormGroup>
					<StyledField type="address" name="address" placeholder="Address" />
					<FormGroupThree>
						<StyledField type="text" name="city" placeholder="City" />
						<SelectContainer>
							<StyledSelect name="state" as="select">
								<option value="">State</option>
								{States.map(({ name, abbreviation }) => (
									<option key={abbreviation} value={abbreviation}>
										{name}
									</option>
								))}
							</StyledSelect>
						</SelectContainer>
						<StyledField
							type="text"
							name="zipcode"
							placeholder="Zipcode"
							pattern="[0-9]*"
						/>
					</FormGroupThree>
				</FormSection>
				<FormSection>
					<Text
						mb={[rem(14), rem(14), rem(36)]}
						variant="highlight"
						color={theme.colors.black}
					>
						PROJECT SPECS
					</Text>
					<FormSubheading>
						<span>Project Type</span>
						<span>[ please select one ]</span>
						<StyledError special>
							{
								// @ts-expect-error
								errors.projectType
							}
						</StyledError>
					</FormSubheading>
					<FormGroupRadio
						role="group"
						aria-labelledby="radio-group"
						mt={rem(12)}
						mb={rem(48)}
					>
						{renderFormGroup(projectType)}
					</FormGroupRadio>
					<FormGroup>
						<StyledField
							type="text"
							name="pSquareFootage"
							placeholder="Property Sq. Footage"
						/>
						<StyledField
							type="text"
							name="sSquareFootage"
							placeholder="Space Sq. Footage"
						/>
						<StyledField type="date" name="startDate" placeholder="Proposed Start Date" />
						<StyledField type="date" name="endDate" placeholder="Ideal Completion Date" />
						<StyledField type="text" name="architect" placeholder="Architect" />
						<StyledField type="text" name="contractor" placeholder="Contractor" />
					</FormGroup>
				</FormSection>
				<FormSection>
					<FormSubheading>
						<span>Interior Spaces</span>
						<span>[ select all that apply ]</span>
					</FormSubheading>
					<FormGroupRadio role="group" aria-labelledby="radio-group">
						{renderFormGroup(interiorSpaces)}
					</FormGroupRadio>
				</FormSection>
				<FormSection>
					<FormSubheading>
						<span>Exterior Spaces</span>
						<span>[ select all that apply ]</span>
					</FormSubheading>
					<FormGroupRadio role="group" aria-labelledby="radio-group">
						{renderFormGroup(exteriorSpaces)}
					</FormGroupRadio>
				</FormSection>
				<FormSection>
					<FormSubheading>
						<span>Interior Design Style</span>
						<span>[ select all that apply ]</span>
					</FormSubheading>
					<FormGroupRadio>{renderFormGroup(designStyles)}</FormGroupRadio>
				</FormSection>
				<FormSection>
					<Text
						mb={[rem(14), rem(14), rem(36)]}
						variant="highlight"
						color={theme.colors.black}
					>
						BUDGET
					</Text>
					<FormGroup>
						<StyledField type="text" name="cBudget" placeholder="Construction budget" />
						<StyledField
							type="text"
							name="idBudget"
							placeholder="Interior Design Budget"
						/>
					</FormGroup>
				</FormSection>
			</StyledForm>
		</Container>
	);
}
