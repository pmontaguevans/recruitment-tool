import React from "react";
import { Route } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import Departments from "./Sidebar/Departments/Departments";
import Report from "./Sidebar/Report/Report";
import "./Assignments.css";
import AssignmentList from "./AssignmentList";
import AssignmentDetails from "./Details/AssignmentDetails";
const Assignments = ({ match }) => {
  return (
    <div className="main__layout">
      <Departments match={match} />

      <div className="main__layout-mid">
        <Route path="/assignments/:departmentId" component={Breadcrumbs} />

        {/* AssignmentList should render different content depenging on departmentId */}
        <Route exact path={`${match.url}/:departmentId`} component={AssignmentList} />
        <Route exact path={`${match.url}/:departmentId/:assignmentId`} component={AssignmentDetails} />
      </div>

      <Report />
    </div>
  );
};

export default Assignments;
