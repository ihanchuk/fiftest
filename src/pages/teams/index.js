import React, { useContext } from "react";
import { Page } from "../../common/ui/page";
import { Link } from "react-router-dom";
import { toCurrency } from "../../utils/currency/currency";
import { Preloader } from "../../common/ui/preloader";
import { Row } from "../../common/ui/row";
import { Col } from "../../common/ui/col";
import { TeamsContext } from "../../context";

export const Teams = () => {
  const { teams } = useContext(TeamsContext);
  const teamsLoaded = (
    <Page>
      <h1 className="main">Teams page <span>All availbale teams</span></h1>
      <Row>
        {teams.map(team => {
          return (
            <Col key={team.id} size="col-sm-1 col-md-6 col-lg-4">
              <h2>{team.name}</h2>
              <ul class="params">
                <li>Budget: {toCurrency(team.budget)} &#65505;</li>
                <li>City: {team.city}</li>
                <li>Founded: {team.founded}</li>
                <li>
                  <Link to={"/team/" + team.id}>{team.name}</Link>
                </li>
              </ul>
            </Col>
          );
        })}
      </Row>
    </Page>
  );
  return (
    <>
      {teams && teams.length > 0 ? teamsLoaded : <Preloader loading="teams" />}
    </>
  );
};
