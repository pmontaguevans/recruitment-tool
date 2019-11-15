import React from "react";
import { Link } from "react-router-dom";
const AssignmentList = ({ match }) => {
  const assignmentList = [
    { title: "Tengai GBG/Örebro/Övriga", id: "ID5830" },
    { title: "Tengai Malmö/Helsingborg/Övriga", id: "ID5831" },
    { title: "Tengai Halmstad/Falkenberg/Övriga", id: "ID5832" },
    { title: "Tengai Kiruna/JukkasJäärvi/Övriga", id: "ID5833" },
    { title: "Tengai GBG/Örebro/Övriga", id: "ID5834" }
  ];
  return (
    <div>
      <ul className="assignment--list">
        {assignmentList.map((assignment, index) => {
          return (
            <li key={index}>
              <Link to={`${match.url}/${assignment.id}`}>
                {assignment.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AssignmentList;
