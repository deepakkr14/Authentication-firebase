import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import AuthContext from "./AuthContext";
 const AuthContextProvider = (props) => {
      const initialToken=localStorage.getItem('token'); 
  const [token, setToken] = useState(initialToken);

  const history = useHistory();
  const userIsLoggedIn = !!token;
  console.log(userIsLoggedIn,token)
const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token',token)
    // window.location.href = "/profile";
    history.push('/profile');
  };

  const logoutHandler = () => {
    setToken(null);
    history.push('/auth');
    localStorage.removeItem('token')
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
