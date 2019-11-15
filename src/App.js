import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Assignments from "./components/Assignments/Assignments";
import Candidates from "./components/Candidates/Candidates";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/assignments" component={Assignments} />
        <Route path="/candidates" component={Candidates} />
      </Router>
    </>
  );
}

export default App;
