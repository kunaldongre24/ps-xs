import React from "react";
import "../style/Content.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import PccQuestionaire from "./PccQuestionaire";
import ProjectDetails from "./ProjectDetails";

function Content() {
  return (
    <div className="Content">
      <div className="path-name">
        <Route path="/" exact render={(props) => "Dashboard"} />
        <Route
          path="/pcc-questionaire"
          render={(props) => "PCC Questionaire"}
        />
        <Route path="/project-details" render={(props) => "Project Details"} />
      </div>
      <hr />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/pcc-questionaire" component={PccQuestionaire} />
        <Route path="/project-details" component={ProjectDetails} />
      </Switch>
    </div>
  );
}

export default Content;
