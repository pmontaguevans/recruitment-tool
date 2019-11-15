import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CandidateList from "./CandidateList";
import Questions from "./Questions";

const Candidates = ({ match }) => {
  return (
    <Router>
      <div>
        <div className="heading__container">
          <Link to={`${match.url}`} className="title">
            <span>Candidates</span>
          </Link>
          <Link to={`${match.url}`} className="title">
            <span>Questions</span>
          </Link>
        </div>

        <Switch>
          <Route exact path={`${match.url}`} component={CandidateList} />
          <Route exact path={`${match.url}`} component={Questions} />
        </Switch>
      </div>
    </Router>
  );
};

export default Candidates;
