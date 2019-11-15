import React, { useState } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v1";

import "../Sidebar.css";
import AssignmentForm from "./AssignmentForm";

const Departments = ({ match }) => {
  const [assignments, setAssignments] = useState();
  const addAssignment = department => {
    setAssignments([
      ...assignments,
      { title: department, departmentId: uuid() }
    ]);
  };

  return (
    <div className="aside__container">
      <aside className="sidebar">
        <div className="department--btn">
          <div className="department--btn">
            <AssignmentForm addAssignment={addAssignment} />
          </div>
          <ul className="department--list">
            <li>
              <Link
                className="department--link"
                to={`${match.url}/assigned-to-me`}>
                Assigned to me
                <span>22</span>
              </Link>
            </li>
            <li>
              <Link className="department--link" to={`${match.url}/favourites`}>
                Favourites
                <span>4</span>
              </Link>
            </li>
            <li>
              <Link
                className="department--link"
                to={`${match.url}/all-departments`}
              >
                All departments
                <span>436</span>
              </Link>
            </li>
            <hr className="sidebar__hr" />
            <li>
              <Link className="department--link" to={`${match.url}/marketing`}>
                Marketing
                <span>6</span>
              </Link>
            </li>
            <li>
              <Link className="department--link" to={`${match.url}/sales`}>
                Sales
                <span>124</span>
              </Link>
            </li>
            <li>
              <Link className="department--link" to={`${match.url}/rnd`}>
                R&D
                <span>208</span>
              </Link>
            </li>
            <li>
              <Link className="department--link" to={`${match.url}/hr`}>
                HR
                <span>96</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Departments;
