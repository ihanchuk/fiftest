import { useState, useEffect, useCallback } from "react";
export const useForm = (stateSchema, validationSchema = {}, callback) => {
  const [state, setState] = useState(stateSchema);
  const [disable, setDisable] = useState(true);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    setDisable(true);
  }, []);

  useEffect(() => {
    if (isDirty) {
      setDisable(validateState());
    }
  }, [state, isDirty]); // eslint-disable-line

  const validateState = useCallback(() => {
    const hasErrorInState = Object.keys(validationSchema).some(key => {
      const isInputFieldRequired = validationSchema[key].required;
      const stateValue = state[key].value; // state value
      const stateError = state[key].error; // state error
      const result = (isInputFieldRequired && !stateValue) || stateError
      if(result){
          console.log(`stateValue - ${stateValue}  stateError - ${stateError}`)
      }
      return result
    });
    console.log('Error - ', hasErrorInState)
    return hasErrorInState;
  }, [state, validationSchema]); // eslint-disable-line

  const handleOnChange = useCallback(
    event => {
      setIsDirty(true);

      const name = event.target.name;
      const value = event.target.value;

      console.log(`name: ${name} value: ${value}`)
      console.log(state)

      let error = "";
      if (validationSchema[name].required) {
        if (!value) {
          error = "This is required field.";
        }
      }

      if (
        validationSchema[name].validator !== null &&
        typeof validationSchema[name].validator === "object"
      ) {
        if (value && !validationSchema[name].validator.regEx.test(value)) {
          error = validationSchema[name].validator.error;
        }
      }

      setState(prevState => ({
        ...prevState,
        [name]: { value, error }
      }));
    },
    [state, validationSchema]
  );

  const patchFieldValue = (name, value) => {
    setState(prevState => ({
        ...prevState,
        [name]: { value, error: "" }
      }));
  }

  const handleOnSubmit = useCallback(
    event => {
      event.preventDefault();
      if (!validateState()) {
        callback(state);
      }
    },
    [state] // eslint-disable-line
  );

  return { state, disable, handleOnChange, handleOnSubmit, patchFieldValue };
};

export default useForm;
