import React from "react";
import avatar from "../../../assets/images/philip_svartvit.jpg";

const ProfileComponent = () => {
  const user = {
    isAuthenticated: true,
    name: "Philip Montagu-Evans",
    title: "Recruiter @ TNG",
    avatar: avatar
  };

  return (
    <div className="user__container">
      <div className="user-container">
        <div className="user-container--name">
          <span>{user.name}</span>
        </div>
        <div className="user-container--role">
          <span>{user.title}</span>
        </div>
      </div>
      <div className="user-container--avatar">
        <img src={user.avatar} alt="user.name" />
      </div>
      <div className="modal">{/* for profile component */}</div>
    </div>
  );
};

export default ProfileComponent;
