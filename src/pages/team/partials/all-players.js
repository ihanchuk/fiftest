import React, { useState } from "react";
import { toCurrency } from "../../../utils/currency/currency";
import { Row, Col } from "../../../common/ui";
import { Link } from "react-router-dom";

export const AllPlayersOfTeam = ({ playersResponse }) => {
  const [limit, setLimit] = useState(3);
  return (
    <Row>
      <Col size="w-100">
        <h2>Team players:: </h2>
        <hr />
      </Col>
      {playersResponse.map((player, index) => {
        if (index >= limit) return;
        return (
          <Col size="col-sm-2 col-lg-4 player-info" key={player.id}>
            <Link to={`/player/${player.name}`}>{player.name}</Link>
            <ul class="params">
              <li>Name:<span>{player.name}</span></li>
              <li>Age:<span>{player.age}</span></li>
              <li>Nationality:<span>{player.nationality}</span></li>
              <li>Value:<span>{toCurrency(player.value)} &#65505;</span></li>
            </ul>
          </Col>
        );
      })}
      {limit <= playersResponse.length - 1 && (
        <Col size="col-sm-12">
          <button
            class="action-button"
            onClick={() => setLimit(limit => (limit = playersResponse.length))}
          >
            Load all Players ...
          </button>
        </Col>
      )}
    </Row>
  );
};
