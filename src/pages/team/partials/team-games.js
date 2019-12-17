import React, {useState} from "react";
import { findById } from "../../../utils/teams/find-by-id";
import { Row, Col } from "../../../common/ui";
import { dateToFormat } from "../../../utils/date/date-to-format";

export const AllGamesOfTeam = ({ teamGames, teams }) => {

  const [limit, setLimit] =useState(3);
  if (teamGames.length < 1 || teams.length < 1) return "";
  return (
    <Row>
      <Col size="w-100">
        <h2>Team games:: </h2>
        <hr />
      </Col>
      {teamGames.map( (game, index) => {
        const teamName = findById(teams, game.team_one_id);
        const enemy = findById(teams, game.team_two_id);
        if (index >= limit) return;
        return (
          <Col size="col-sm-2 col-lg-4" key={game.id}>
            <h4>
              {teamName} vs {enemy}
            </h4>
            <ul>
              <li>
                Score: {game.team_one_goals} VS {game.team_two_goals}
              </li>
              <li>Date: {dateToFormat(game.date, "/")}</li>
            </ul>
          </Col>
        );
      })}
      { limit <= teamGames.length-1 &&
        <Col size="col-sm-12">
          <button class="action-button" onClick={() =>setLimit( (limit) => limit += limit)}>Load more ...</button>
        </Col>
      }
      
    </Row>
  );
};
