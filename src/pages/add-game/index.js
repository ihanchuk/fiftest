import React, { useContext } from "react";
import { Page } from "../../common/ui/page";
import { TeamsContext } from "../../context";
import { AddGameForm } from "./add-game-form";

export const AddGame = props => {
  const { teams } = useContext(TeamsContext);
  return (
    <Page>
      <h1>Add game:</h1>
      <AddGameForm />
    </Page>
  );
};
