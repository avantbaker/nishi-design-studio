import styled from 'styled-components';
import { ErrorMessage, Field } from 'formik';
import theme from 'styles/theme';
import { Flex } from 'rebass/styled-components';
import { rem, rgba } from 'polished';
import { breakpoints } from 'styles/media';

export const StyledField = styled(Field)`
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
export const RadioLabel = styled.label`
	display: flex;
	align-items: center;
	position: relative;
	cursor: none;
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
export const RadioInput = styled(Field)`
	appearance: none;
	width: ${rem(30)};
	height: ${rem(30)};
	margin: 0;
	border: ${rem(1)} solid ${theme.colors.orange};
	border-radius: 50%;
	padding: ${rem(5)};
	background-clip: content-box, padding-box;
	margin-right: ${rem(11)};
	cursor: none;

	:checked {
		background-color: ${theme.colors.orange};
	}
`;
export const SelectContainer = styled.div`
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
export const StyledSelect = styled(StyledField)`
	appearance: none;
	width: 100%;
	padding-top: ${rem(2)};
	color: ${rgba(215, 139, 50, 0.57)};
`;
export const FormSection = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: ${rem(75)};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		margin-bottom: ${rem(61)};
	}
`;
export const FormGroup = styled(Flex)`
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
export const FormGroupRadio = styled(Flex)`
	flex-wrap: wrap;
	column-gap: ${rem(27)};
	> * {
		width: ${rem(250)};
	}
`;
export const FormGroupThree = styled(Flex)`
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
export const FormSubheading = styled.div`
	display: flex;
	flex-direction: column;
	font-family: ${theme.typography.fonts.primary};
	font-size: ${rem(15)};
	font-weight: bold;
	line-height: ${rem(22)};
	position: relative;
	color: ${theme.colors.black};

	@media only screen and (min-width: ${breakpoints.tablet}) {
		line-height: ${rem(50)};
		flex-direction: row;
		span:first-child {
			margin-right: ${rem(6)};
		}
	}
`;

export const FieldWrapper = styled('div')`
	position: relative;
	input {
		width: 100%;
	}
`;

export const StyledError = styled('div')`
	position: absolute;
	bottom: ${({ special = false }) => (special ? `-${rem(10)}` : `${rem(12)}`)};
	color: red;
	font-family: ${theme.typography.fonts.primary};
	font-size: ${rem(15)};
	font-weight: bold;
	line-height: ${rem(22)};
`;
