import React from "react";
import "../style/Content.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import PccQuestionaire from "./PccQuestionaire";
import ProjectDetails from "./ProjectDetails";
import PerformPcc from "./PerformPcc";
import ProjectView from "./ProjectView";
import OpenTopics from "./OpenTopics";

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
        <Route
          path="/perform-pcc/project-view"
          render={(props) => "Project View"}
        />
        <Route path="/perform-pcc" render={(props) => "Perform PCC"} />
        <Route path="/open-topics" render={(props) => "Open Topics"} />
      </div>
      <hr />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/pcc-questionaire" component={PccQuestionaire} />
        <Route path="/project-details" component={ProjectDetails} />
        <Route path="/perform-pcc/project-view" component={ProjectView} />
        <Route path="/perform-pcc" component={PerformPcc} />
        <Route path="/open-topics" component={OpenTopics} />
        <Route path="/project-details" component={ProjectDetails} />
      </Switch>
    </div>
  );
}

export default Content;
