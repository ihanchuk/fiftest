import React from "react";
import { findById } from "../../../utils/teams/find-by-id";
import { Row, Col } from "../../../common/ui";
import { dateToFormat } from "../../../utils/date/date-to-format";

export const AllGamesOfTeam = ({ teamGames, teams }) => {
  if (teamGames.length < 1 || teams.length < 1) return "";
  return (
    <Row>
      <Col size="w-100">
        <h2>Team games:: </h2>
        <hr />
      </Col>
      {teamGames.map(game => {
        const teamName = findById(teams, game.team_one_id);
        const enemy = findById(teams, game.team_two_id);
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
    </Row>
  );
};
