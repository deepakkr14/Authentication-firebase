import React, { useState } from "react";


import AuthContext from "./AuthContext";
 const AuthContextProvider = (props) => {
      const initialToken=localStorage.getItem('token'); 
  const [token, setToken] = useState(initialToken);


  const userIsLoggedIn = !!token;
  console.log(userIsLoggedIn,token)
const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token',token)
    // window.location.href = "/profile";
    setTimeout(()=>{
        localStorage.removeItem('token');
        setToken(null)
    },30000)
   
  };

  const logoutHandler = () => {
    setToken(null);
 
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
