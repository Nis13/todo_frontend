import { TextField } from "@mui/material";
import React from "react";

interface TextInputProps {
  value: string | number;
  onChange: (e: React.ChangeEvent) => void;
  isLoading?: boolean;
  label: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
}

const TextInput = ({
  value,
  onChange,
  isLoading,
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
      disabled={isLoading}
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
