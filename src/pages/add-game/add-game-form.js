import React from "react";
import useForm from "../../hooks/form/use-form";
import { POSITIVE_INTEGER, ID_TEXT } from "../../utils/forms";
import { TextInputField } from "../../common/ui/forms/input";
import { ErrorPlaceholder } from "../../common/ui/forms/error-placehlder";
import { SelectField } from "../../common/ui/forms/select";

export const AddGameForm = () => {
  const emptyControlValue = { value: "", error: "" };
  const stateSchema = {
    score_one: { ...emptyControlValue },
    score_two: { ...emptyControlValue },
    team_one_name: { ...emptyControlValue },
    team_two_name: { ...emptyControlValue }
  };

  const validationStateSchema = {
    score_one: {
      required: true,
      validator: {
        regEx: POSITIVE_INTEGER,
        error: "Invalid first team score. Score should be positive number."
      }
    },
    score_two: {
      required: true,
      validator: {
        regEx: POSITIVE_INTEGER,
        error: "Invalid second team score. Score should be positive number."
      }
    },
    team_one_name: {
      required: false,
      validator: {
        regEx: ID_TEXT,
        error: "Invalid second team score. Score should be positive number."
      }
    },
    team_two_name: {
      required: false,
      validator: {
        regEx: ID_TEXT,
        error: "Invalid second team score. Score should be positive number."
      }
    }
  };

  const onSubmitForm = state => {
    alert(JSON.stringify(state, null, 2));
  };

  const {
    state,
    handleOnChange,
    handleOnSubmit,
    disable,
    patchFieldValue
  } = useForm(stateSchema, validationStateSchema, onSubmitForm);

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="lname">
            Score one:
            <TextInputField
              name="score_one"
              value={state.score_one.value}
              onChange={handleOnChange}
              hasError={state.score_one.error}
            />
          </label>
          <ErrorPlaceholder error={state.score_one.error} />
        </div>
        <div>
          <label htmlFor="lname">
            Score one:
            <TextInputField
              name="score_two"
              value={state.score_two.value}
              onChange={handleOnChange}
              hasError={state.score_two.error}
            />
          </label>
          <ErrorPlaceholder error={state.score_two.error} />
        </div>
        <div>
          <label htmlFor="lname">
            Select team one
            <SelectField
              options={[
                { value: 1, title: "Real" },
                { value: 2, title: "Barcelona" }
              ]}
              name="team_one_name"
              setFieldValue={patchFieldValue}
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div>
          <label>
            Select team 2
            <SelectField
              options={[
                { value: 1, title: "Madrid" },
                { value: 2, title: "Juventus" }
              ]}
              name="team_two_name"
              setFieldValue={patchFieldValue}
              onChange={handleOnChange}
            />
          </label>
        </div>
        <input type="submit" name="submit" disabled={disable} />
      </form>
    </div>
  );
};
