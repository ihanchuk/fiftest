export const allTeamsMetaData = teams => {
  const teamsMap = [];
  teams.forEach(team => {
    teamsMap.push({ value: team.id, title: team.name });
  });
  return teamsMap;
};
