import styled from 'styled-components';
import { States } from 'components/sections/form-section/states';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import theme from 'styles/theme';
import { Flex } from 'rebass/styled-components';
import { rem, rgba } from 'polished';
import Text from 'components/common/text';
import { breakpoints } from 'styles/media';

const Container = styled.section``;

const StyledForm = styled(Form)`
	display: flex;
	flex-direction: column;
`;

const interiorSpaces = [
	'Foyer',
	'Kitchen',
	'Butlers Pantry',
	'Family Room',
	'Living Room',
	'Dining Room',
	'Bar',
	'Powder Room ',
	'Laundry Room',
	'Mud Room',
	'Media Room',
	'Master Bedroom',
	'Master Bathroom',
	'Master Closet',
	'Secondary Bedrooms',
	'Secondary Bathrooms',
	'Secondary Closets',
	'Den',
	'Office',
	'Nursery',
	'Gym',
	'Pool House',
	'Basement',
	'Additional Spaces',
];

const exteriorSpaces = [
	'Pool House',
	'California Room',
	'Sun Room',
	'Pool',
	'Spa',
	'Patios',
	'Additional Spaces',
];

const designStyles = [
	'Modern',
	'Traditional',
	'Art Deco',
	'Bohemian',
	'Coastal',
	'Contemporary',
	'Farmhouse',
	'Transitional',
	'Eclectic',
	'Scandinavian ',
	'Mid-Century Modern',
	'Industrial',
];

function convertToKey(key) {
	return key.toLowerCase().split(' ').join('-');
}
function renderFormGroup(formGroup = []) {
	return (
		formGroup.length > 0 &&
		formGroup.map((key, idx) => {
			const fullKey = convertToKey(key);
			return (
				<RadioLabel key={`${fullKey}-${idx}`}>
					<RadioInput type="radio" name={fullKey} value={fullKey} />
					{key}
				</RadioLabel>
			);
		})
	);
}

const StyledField = styled(Field)`
	background: transparent !important;
	border: 0;
	border-bottom: ${rem(1)} solid ${theme.colors.sand};
	font-family: ${theme.typography.fonts.primary};
	font-size: ${rem(15)};
	font-weight: bold;
	line-height: ${rem(50)};
	color: ${theme.colors.black};
	margin-bottom: ${rem(3)};

	::placeholder {
		color: ${rgba(215, 139, 50, 0.57)};
	}

	:-webkit-autofill,
	:-webkit-autofill:hover,
	:-webkit-autofill:focus,
	:-webkit-autofill:active {
		-webkit-box-shadow: 0 0 0 30px transparent inset !important;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		margin-bottom: ${rem(42)};
		font-size: ${rem(25)};
		line-height: ${rem(50)};
	}
`;

const RadioLabel = styled.label`
	display: flex;
	align-items: center;
	position: relative;
	cursor: pointer;
	font-size: ${rem(15)};
	line-height: ${rem(50)};
	font-weight: bold;
	font-family: ${theme.typography.fonts.primary};
	color: ${theme.colors.orange};
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;

const RadioInput = styled(Field)`
	appearance: none;
	width: ${rem(30)};
	height: ${rem(30)};
	margin: 0;
	border: ${rem(1)} solid ${theme.colors.orange};
	border-radius: 50%;
	padding: ${rem(5)};
	background-clip: content-box, padding-box;
	margin-right: ${rem(11)};
	cursor: pointer;

	:checked {
		background-color: ${theme.colors.orange};
	}
`;

const SelectContainer = styled.div`
	position: relative;

	:after {
		content: '';
		border-radius: 50%;
		border: ${rem(1)} solid ${theme.colors.orange};
		width: ${rem(32)};
		height: ${rem(32)};
		display: block;
		position: absolute;
		top: ${rem(8)};
		right: ${rem(8)};
		background: url('/images/down-arrow.png') no-repeat;
		background-position-x: 9px;
		background-position-y: 14px;
		pointer-events: none;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		width: fit-content;
	}
`;

const StyledSelect = styled(StyledField)`
	appearance: none;
	width: 100%;
	padding-top: ${rem(2)};
	color: ${rgba(215, 139, 50, 0.57)};
`;

const FormSection = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: ${rem(75)};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		margin-bottom: ${rem(61)};
	}
`;

const FormGroup = styled(Flex)`
	flex-wrap: wrap;

	> * {
		flex-grow: 1;
	}

	@media only screen and (min-width: ${breakpoints.tablet}) {
		column-gap: ${rem(30)};
		> * {
			width: calc(50% - ${rem(24)});
		}
	}
`;

const FormGroupRadio = styled(Flex)`
	flex-wrap: wrap;
	column-gap: ${rem(27)};
	> * {
		width: ${rem(250)};
	}
`;

const FormGroupThree = styled(Flex)`
	flex-direction: column;
	> * {
		width: 100%;
	}
	@media only screen and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
		column-gap: ${rem(30)};
		> * {
			flex-grow: 1;
			width: auto;
		}
	}
`;

const FormSubheading = styled.div`
	display: flex;
	flex-direction: column;
	font-family: ${theme.typography.fonts.primary};
	font-size: ${rem(15)};
	font-weight: bold;
	line-height: ${rem(22)};

	color: ${theme.colors.black};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		line-height: ${rem(50)};
		flex-direction: row;
		span:first-child {
			margin-right: ${rem(6)};
		}
	}
`;

export default function FormSectionComponent() {
	return (
		<Container>
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={(values) => {
					const errors = {};
					// if (!values.email) {
					//   errors.email = 'Required';
					// } else if (
					//   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					// ) {
					//   errors.email = 'Invalid email address';
					// }
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({ isSubmitting }) => (
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
								<StyledField type="phone" name="phone" placeholder="Phone Number" />
								<StyledField type="email" name="email" placeholder="Email" />
							</FormGroup>
							<StyledField type="address" name="address" placeholder="Address" />
							<FormGroupThree>
								<StyledField type="text" name="city" placeholder="City" />
								<SelectContainer>
									<StyledSelect as="select">
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
							</FormSubheading>
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
								<StyledField
									type="text"
									name="startDate"
									placeholder="Proposed Start Date"
								/>
								<StyledField
									type="text"
									name="startDate"
									placeholder="Ideal Completion Date"
								/>
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
								<StyledField
									type="text"
									name="cBudget"
									placeholder="Construction budget"
								/>
								<StyledField
									type="text"
									name="idBudget"
									placeholder="Interior Design Budget"
								/>
							</FormGroup>
						</FormSection>
					</StyledForm>
				)}
			</Formik>
		</Container>
	);
}
