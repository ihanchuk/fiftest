import React from "react";

export const TextInputField = ({
  name,
  value,
  onChange,
  hasError
}) => {
  return (
      <input
        type="text"
        name={name}
        onChange={onChange}
        value={value}
        className={`input-text ${hasError ? "input-with-error" : ""} `}
      />
  );
};
