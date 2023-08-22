import { InputHTMLAttributes } from "react";

type ElementProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  "onFocus" | "onBlur"
>;

export interface IInputProps extends ElementProps {
  name?: string;
  placeholder?: string;
  id: string;
  options?: any[];
  pattern?: string;
  mt?: string;
  mb?: string;
}
