import { TextField } from "@mui/material";
import React from "react";

interface TextInputProps {
  value: string | number;
  onChange: (e: React.ChangeEvent) => void;
  isDisabled?: boolean;
  label: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
}

const TextInput = ({
  value,
  onChange,
  isDisabled,
  label,
  type,
  name,
}: TextInputProps) => {
  return (
    <TextField
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      sx={{
        "& .MuiOutlinedInput-root": {
          "&:hover fieldset": {
            borderColor: "primary.main",
          },
        },
      }}
    />
  );
};

export default TextInput;
