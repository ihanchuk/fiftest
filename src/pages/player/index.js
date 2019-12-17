import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import { Page } from "../../common/ui/page";
import { useData } from "../../hooks/api/use-data";
import { TeamsContext } from "../../context";
import { PlayerInfo } from "./player-info";
import { PlayerHistory } from "./player-history";

export const Player = (props) => {
  const { playerName } = useParams();
  const { teams} = useContext(TeamsContext);
  const [player, playerLoading, playerError] = 
  useData("teams/players", playerName, "name");

    return <Page>
      <h1 class="main">Player Profile<span>Games and etc</span></h1>
        {
         <div>
          <PlayerInfo info={player} teams={teams} />
          <PlayerHistory info={player} teams={teams} />
         </div>
       }
    </Page>;
};
