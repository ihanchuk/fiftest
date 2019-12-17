import React from "react";
import { Row, Col } from "../../common/ui";
import { findById } from "../../utils/teams/find-by-id";
import { Preloader } from "../../common/ui/preloader";
import { Link } from "react-router-dom";

export const PlayerHistory = ({ info, teams }) => {
  if (!info.length || !teams || teams.length < 1)
    return <Preloader loading="Player statistics" />;
  const history = info[0].history;
  return (
    <Row>
      {history.map(h => {
        return (
          <Col key={h.team_id} size="col-sm-1 col-md-6 col-lg-4">
            <h4>
              Stat for :
              <Link to={"/team/" + h.team_id}>
                {findById(teams, h.team_id)}
              </Link>
            </h4>
            <ul>
                <li>Apps : <span>{h.apps}</span></li>
                <li>Goals : <span>{h.goals}</span></li>
            </ul>
          </Col>
        );
      })}
    </Row>
  );
};
