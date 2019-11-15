import React from "react";
import { useParams } from "react-router-dom";

import AssignmentRole from "./Role";
import PersonalityTraits from "./Traits";
import Candidates from "./Candidates";
import PieChart from "./PieChart";

const AssignmentDetails = ({ match }) => {
  let { assignmentId } = useParams();
  return (
    <div className="assignment__container">
      <div className="project__overview">
        <div className="project__overview--chart">
          <div>
            <h1 className="project__title">
              Tengai GBG/Örebro/Övriga ({assignmentId})
            </h1>
          </div>
          <PieChart />
        </div>
        <AssignmentRole />
        <PersonalityTraits />
        <Candidates match={match} />
      </div>
    </div>
  );
};

export default AssignmentDetails;
