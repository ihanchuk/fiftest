import React from 'react'
import { toCurrency } from "../../../utils/currency/currency";
import { Row, Col } from "../../../common/ui";

export const TeamInfo = ({teamResponse}) => (
    <Row>
      {teamResponse.map(team => {
        return (
          <Col size="col-sm" key={team.id}>
            <h1>I am team {team.name}</h1>
            <ul>
              <li>name:{team.name}</li>
              <li>budget:{toCurrency(team.budget)} &#65505;</li>
              <li>city:{team.city}</li>
              <li>founded:{team.founded}</li>
            </ul>
          </Col>
        );
      })}
    </Row>
  );
