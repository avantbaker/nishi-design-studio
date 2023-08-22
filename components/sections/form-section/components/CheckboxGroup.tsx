import {
  FormGroupRadio,
  FormSubheading,
  RadioInput,
  RadioLabel,
  StyledError,
} from "../styles";
import { useCheckboxInput } from "react-google-forms-hooks";
import { IInputProps } from "./ElementProps";

export const CheckboxGroup = ({
  id,
  name,
  placeholder,
  options,
  ...rest
}: IInputProps) => {
  const {
    options: internalOptions,
    error,
    label: title,
  } = useCheckboxInput(id);
  const radioOptions = options || internalOptions;
  return (
    <>
      <FormSubheading>
        <span>{title}</span>
        {/* <span>[ select all that apply ]</span> */}
      </FormSubheading>
      <FormGroupRadio role="group" aria-labelledby="radio-group" {...rest}>
        {radioOptions?.map(({ registerOption, label }, index) => {
          return (
            <RadioLabel key={index}>
              <RadioInput type="radio" {...registerOption()} />
              {label}
            </RadioLabel>
          );
        })}
        {error && <StyledError>{error.message}</StyledError>}
      </FormGroupRadio>
    </>
  );
};
