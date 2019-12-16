import React, {useEffect} from "react";

export const SelectField = ({ name, onChange, hasError, options, setFieldValue}) => {
    useEffect( ()=>{
        console.log("Setting field value")
        setTimeout( () =>setFieldValue(name, options[0].value))
    }, []) // eslint-disable-line
  return (
    <select
      name={name}
      onChange={onChange}
      value={options[0].value}
      className={`input-text ${hasError ? "input-with-error" : ""} `}
    >
      {options.map((option, index) => {
        return (
          <option value={option.value} key={option.value+index}>
            {option.title}
          </option>
        );
      })}
    </select>
  );
};
