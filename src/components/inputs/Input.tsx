import React from "react";
import { Box, BoxStyles } from "components/wrappers/Box";
import { BaseButton } from "components/buttons/elements/BaseButton";
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

export const Input: React.FC<InputProps & BoxStyles<Theme>> = ({
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
  <Box
    position="relative"
    margin="auto"
    mt="s20"
    borderRadius="blackBtn"
    bg="baseWhite"
  >
    {label && <label htmlFor="input">{label}</label>}
    <input
      style={{
        border: "none",
        maxWidth: "480px",
        height: "5rem",
      }}
      id={label}
      value={value}
      type={type}
      placeholder={placeholder}
      min={minValue}
      max={maxValue}
      onChange={onChange}
      {...props}
    />
    <BaseButton
      color="baseWhite"
      position="absolute"
      top="1rem"
      right="1rem"
      bg="baseBlack"
      borderRadius="blackBtn"
      px="s32"
      py="s16"
    >
      Subscribe
    </BaseButton>
    {error && <span>{error}</span>}
  </Box>
);
