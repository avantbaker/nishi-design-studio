import { StyledField } from "../styles";
import {
  useLongAnswerInput,
  useShortAnswerInput,
} from "react-google-forms-hooks";
import { IInputProps } from "./ElementProps";

export const Input = ({ name, placeholder, id, ...inputRest }: IInputProps) => {
  const { register, ...rest } = useShortAnswerInput(id);
  return (
    <StyledField
      type="text"
      name={name}
      placeholder={placeholder}
      {...rest}
      {...inputRest}
      {...register()}
    />
  );
};
export const InputLong = ({ name, placeholder, id }: IInputProps) => {
  const { register, ...rest } = useLongAnswerInput(id);
  return (
    <StyledField
      type="text"
      name={name}
      placeholder={placeholder}
      {...rest}
      {...register()}
    />
  );
};
