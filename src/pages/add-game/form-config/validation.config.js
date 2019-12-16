import { POSITIVE_INTEGER, ID_TEXT } from "../../../utils/forms";
export const emptyControlValue = { value: "", error: "" };
export const validationAddGameStateSchema = {
    team_one_goals: {
      required: true,
      validator: {
        regEx: POSITIVE_INTEGER,
        error: "Invalid first team score. Score should be positive number."
      }
    },
    team_two_goals: {
      required: true,
      validator: {
        regEx: POSITIVE_INTEGER,
        error: "Invalid second team score. Score should be positive number."
      }
    },
    team_one_id: {
      required: false,
      validator: {
        regEx: ID_TEXT,
        error: "Invalid second team."
      }
    },
    team_two_id: {
      required: false,
      validator: {
        regEx: ID_TEXT,
        error: "Invalid second team score. Score should be positive number."
      }
    },
    date: {
      required: true,
      validator:{
        regEx: ID_TEXT,
        error: "Please choose date/time"
      }
    }
  };

  export const addGameStateSchema = {
    team_one_goals: { ...emptyControlValue },
    team_two_goals: { ...emptyControlValue },
    team_one_id: { ...emptyControlValue },
    team_two_id: { ...emptyControlValue },
    date: { ...emptyControlValue }
  };