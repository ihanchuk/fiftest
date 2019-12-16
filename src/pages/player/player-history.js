import React from "react";
import { Row, Col } from "../../common/ui";

export const PlayerHistory = ({ info }) => {
  if(!info || info.length <1 )  return null;
  const history = info[0].history;
  return (
    <Row>
      <Col size="w-100">
        {
            history.map( (h) => {
                return(<div>{h.apps}</div>)
            })
        }        
      </Col>
    </Row>
  );
};
