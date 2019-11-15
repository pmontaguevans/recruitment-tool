import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/tengailogga.png";
import "./Navbar.css";
import ProfileComponent from "./Profile/Profile";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="container__nav">
        <div className="container__nav--left">
          <div className="container__nav--logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="container__nav--links">
            <ul>
              <li>
                <Link className="hasActiveStatus" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="hasActiveStatus" to="/assignments">
                  Assignments
                </Link>
              </li>
              <li>
                <Link className="hasActiveStatus" to="/candidates">
                  Candidates
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container__nav--right">
          {/* <ThemeToggle /> */}
          <ProfileComponent />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
