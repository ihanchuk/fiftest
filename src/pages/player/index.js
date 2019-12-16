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
       {
         <div>
          <PlayerInfo info={player} />
          <PlayerHistory info={player} />
         </div>
       }
    </Page>;
};
