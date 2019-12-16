import React from "react";
import { toCurrency } from "../../../utils/currency/currency";
import { Row, Col } from "../../../common/ui";
import { Link } from "react-router-dom";

export const AllPlayersOfTeam = ({ playersResponse }) => {
  return (
    <Row>
      <Col size="w-100">
        <h2>Team players:: </h2>
        <hr />
      </Col>
      {playersResponse.map(player => {
        return (
          <Col size="col-sm-2 col-lg-4" key={player.id}>
            <Link to={`/player/${player.name}`}>{player.name}</Link>
            <ul>
              <li>Name:{player.name}</li>
              <li>Age:{player.age}</li>
              <li>Nationality:{player.nationality}</li>
              <li>Position:{player.position}</li>
              <li>Value:{toCurrency(player.value)} &#65505;</li>
            </ul>
          </Col>
        );
      })}
    </Row>
  );
};
