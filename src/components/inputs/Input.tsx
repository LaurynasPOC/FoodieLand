import React from "react";
import { Box, BoxStyles } from "components/wrappers/Box";
import { Theme } from "styles/theme";

export type InputTypes =
  | "checkbox"
  | "email"
  | "number"
  | "password"
  | "submit"
  | "text";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  minValue?: number;
  maxValue?: number;
  message?: string;
  value?: string | number;
  label?: string;
  placeholder?: string;
  type?: InputTypes;
  onChange?: () => void;
}

export const InputField: React.FC<InputProps & BoxStyles<Theme>> = ({
  error,
  minValue,
  maxValue,
  label,
  type,
  value,
  placeholder,
  onChange,
  ...props
}) => (
  <Box>
    {label && <label htmlFor="input">{label}</label>}
    <input
      id={label}
      value={value}
      type={type}
      placeholder={placeholder}
      min={minValue}
      max={maxValue}
      onChange={onChange}
      {...props}
    />
    {error && <span>{error}</span>}
  </Box>
);
