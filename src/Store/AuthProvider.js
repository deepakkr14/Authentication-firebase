import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import AuthContext from "./AuthContext";
 const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const history = useHistory();
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    // window.location.href = "/profile";
    history.push('/profile');
  };

  const logoutHandler = () => {
    setToken(null);
    history.push('/auth');
    console.log('i am logout')
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
