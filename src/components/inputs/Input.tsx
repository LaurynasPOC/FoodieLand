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
  label?: string;
  placeholder?: string;
  type?: InputTypes;
  onChange?: () => void;
}
