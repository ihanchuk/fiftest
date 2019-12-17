import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { Page } from "../../common/ui/page";
import { useData } from "../../hooks/api/use-data";
import { Preloader } from "../../common/ui/preloader";
import { AllPlayersOfTeam } from "./partials/all-players";
import { TeamInfo } from "./partials/team-info";
import { TeamsContext } from "../../context";
import { AllGamesOfTeam } from "./partials/team-games";
import { ErrorPlaceholder } from "../../common/ui/forms/error-placehlder";

export const Team = () => {
  const { teamId } = useParams();
  const [teamResponse, teamLoading, error] = useData("teams", teamId);
  const [playersResponse, playersLoading, playersError] = useData("teams/players", teamId, "team_id");
  const [gamesResponse, gamesLoading, gamesError] = useData("teams/games", teamId, "team_one_id");
  const { teams } = useContext(TeamsContext);
  return (
    <Page>
      <h1 className="main">Team page <span>All games, players and etc</span></h1>
      <ErrorPlaceholder error={gamesError} />
      <ErrorPlaceholder error={playersError} />
      <ErrorPlaceholder error={error} />
      {!teamLoading ? 
        <TeamInfo teamResponse={teamResponse} />
       : 
        <Preloader loading="Team info" />
      }
      {!playersLoading ? 
        <AllPlayersOfTeam playersResponse={playersResponse} />
       : 
        <Preloader loading="Players" />
      }
      {
        teams && gamesResponse.length > 0 && <AllGamesOfTeam teamGames={gamesResponse} teams= {teams}/> 
      }
    </Page>
  );
};
