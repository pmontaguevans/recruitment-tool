import React, { createContext, useState } from "react";
import avatar from "../assets/images/philip_svartvit.jpg"
export const AuthContext = createContext();

const AuthContextProvider = () => {
  const { user, setUser } = useState({
    user: {
      isAuthenticated: true,
      name: "Philip Montagu-Evans",
      title: "Recruiter @ TNG",
      avatar: avatar
    }
  });

  const toggleAuth = () => {
    setUser({ ...user, isAuthenticated: !user.isAuthenticated });
  };

  return (
    <AuthContext.Provider value={{ ...user, toggleAuth: toggleAuth }}>
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
