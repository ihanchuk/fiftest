import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Teams } from "../../pages/teams";
import { Team } from "../../pages/team";
import { Player } from "../../pages/player";
import { Home } from "../../pages/home";
import { NotFound } from "../../pages/not-found";
import { AddGame } from "../../pages/add-game";
import { TopMenu } from "../ui/menu";
import { TeamsContext } from "../../context";
import { useData } from "../../hooks/api/use-data";

export const Layout = () => {
  const [teamsResponse] = useData("teams");
  const { setTeams } = useContext(TeamsContext);
  setTeams(teamsResponse);

  return (
    <Router>
      <div className="router-outlet">
        <TopMenu />
        <Switch>
          <Route path="/teams" exact>
            <Teams />
          </Route>
          <Route path="/team/:teamId" exact>
            <Team />
          </Route>
          <Route path="/games/add" exact>
            <AddGame />
          </Route>
          <Route path="/player/:playerName" exact>
            <Player />
          </Route>
          <Route path="/" exact>
            <Teams />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
