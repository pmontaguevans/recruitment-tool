import React from "react";
import avatar from "../../../assets/images/philip_svartvit.jpg";

const AssignmentRole = () => {
  return (
    <div className="project__overview--role">
      <div className="role--description">
        <div>
          <h4 className="role--heading">Role description</h4>
        </div>
        <div>
          <p>Long description, perhaps two rows or more goes here..</p>
        </div>
      </div>
      <div className="role--assignee">
        <div>
          <h4 className="role--heading">Assigned to</h4>
        </div>
        <div className="user-container--avatar role--assignees">
          <img src={`${avatar}`} alt="Philip M-E"/>
          <img src={`${avatar}`} alt="Lisa E" />
          <span>Philip M-E and Lisa E</span>
        </div>
      </div>
      <div>
        <ul>
          <li className="role--points">
            <span>Scored and evaluated</span>
            <span className="role--eval-count">2</span>
          </li>
          <li className="role--points">
            <span>Interview completed</span>
            <span className="role--compl-count">2</span>
          </li>
          <li className="role--points">
            <span>Not interviewed yet</span>
            <span className="role--noncompl-count">4</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AssignmentRole;
