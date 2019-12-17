import React from "react";
import { Row, Col } from "../../common/ui";
import { Preloader } from "../../common/ui/preloader";
import { toCurrency } from "../../utils/currency/currency";

export const PlayerInfo = ({ info, teams }) => {
  if (!info.length || !teams || teams.length < 1)
    return <Preloader loading="Player profile" />;

  const player = info[0];
  return (
    <Row>
      <Col size="w-100">
        <h2>Player name:: {player.name} </h2>
        <ul>
          <li>
            Age: <span>{player.age}</span>
          </li>
          <li>
            Nationality: <span>{player.nationality}</span>
            &nbsp; <img src= {player.flag_url} alt={player.nationality} width="20" />
          </li>
          <li>
            Position: <span>{player.position}</span>
          </li>
          <li>
            Value: <span>{toCurrency(player.value)} &#65505;</span>
          </li>
        </ul>
      </Col>
    </Row>
  );
};
