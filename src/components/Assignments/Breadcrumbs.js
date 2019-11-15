import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ match }) => {
    console.log(match);
  return (
    <div className="assignment__container--breadcrumbs">
      <Link className="arrow--link" to={`${match.url}`}>
        <span className="arrow--icon">
          <FaArrowLeft />
        </span>
      </Link>
      <div className="breadcrumbs">
        <span className="nav--link">{match.params.departmentId}</span>
      </div>
    </div>
  );
};

export default Breadcrumbs;
