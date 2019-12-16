import React from "react";
import { Row, Col } from "../../common/ui";

export const PlayerInfo = ({ info }) => {
  if(!info || info.length <1 )  return null;
  const player = info[0];
  return (
    <Row>
      <Col size="w-100">
        <h2>Player name:: {player.name} </h2>
        <hr />
        
      </Col>
    </Row>
  );
};
