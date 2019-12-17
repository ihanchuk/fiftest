import React from "react";
import useForm from "../../hooks/form/use-form";
import { TextInputField } from "../../common/ui/forms/input";
import { ErrorPlaceholder } from "../../common/ui/forms/error-placehlder";
import { SelectField } from "../../common/ui/forms/select";
import {
  addGameStateSchema,
  validationAddGameStateSchema
} from "./form-config/validation.config";
import { allTeamsMetaData } from "../../utils/teams/all-tems-dis";
import { gameDataParser } from "./parsers/submit-game.parser";
import { UseSetData } from "../../hooks/api/set-data";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const AddGameForm = ({ teams }) => {
  const onSubmitForm = state => {
    const fieldsToread = [
      "team_one_goals",
      "team_two_goals",
      "team_one_id",
      "team_two_id"
    ];
    const dataForApiRequest = gameDataParser(state, fieldsToread);
    sendRequest("games/new", dataForApiRequest);
  };

  const updateTime = (time) => {
    patchFieldValue('date', time);
  }

  const {
    state,
    handleOnChange,
    handleOnSubmit,
    disable,
    patchFieldValue
  } = useForm(addGameStateSchema, validationAddGameStateSchema, onSubmitForm);

  const [isSending, error, response, sendRequest] = UseSetData();

  if (!teams) return null;
  return (
    <div>
      <ErrorPlaceholder  error={error}/>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="lname">
            <span>Score team #1: </span>
            <TextInputField
              name="team_one_goals"
              value={state.team_one_goals.value}
              onChange={handleOnChange}
              hasError={state.team_one_goals.error}
            />
          </label>
          <ErrorPlaceholder error={state.team_one_goals.error} />
        </div>
        <div>
          <label htmlFor="lname">
          <span>Score team #2: </span>
            <TextInputField
              name="team_two_goals"
              value={state.team_two_goals.value}
              onChange={handleOnChange}
              hasError={state.team_two_goals.error}
            />
          </label>
          <ErrorPlaceholder error={state.team_two_goals.error} />
        </div>
        <div>
          <label htmlFor="lname">
          <span>Select team #1 </span>
            <SelectField
              options={allTeamsMetaData(teams)}
              name="team_one_id"
              setFieldValue={patchFieldValue}
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div>
          <label>
          <span>Select team #2 </span>
            <SelectField
              options={allTeamsMetaData(teams)}
              name="team_two_id"
              setFieldValue={patchFieldValue}
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div>
            <label>
                select time: 
                <DatePicker selected={new Date()} onChange={updateTime} />
            </label>
        </div>
        <input type="submit" name="submit" disabled={disable || isSending} />
      </form>
    </div>
  );
};
