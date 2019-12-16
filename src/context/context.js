import React, { createContext, useState } from "react";

export const Context = createContext([]);

export const Provider = props => {
  const {
    teams: initialTeams,
    children
  } = props;

  const [teams, setTeams] = useState(initialTeams);
  const [selectedTeam, setSelectedTeam] = useState();

  const teamsContext = {
    teams,
    selectedTeam,
    setTeams,
    id:100,
    setSelectedTeam
  };

  return <Context.Provider value={teamsContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;
