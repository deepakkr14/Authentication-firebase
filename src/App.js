import { Switch, Route, Redirect } from "react-router-dom";
import React, { useContext } from "react";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import LoginContext from "./Store/AuthProvider";
import AuthContext from "./Store/AuthContext";

function App() {
  const contxt = useContext(AuthContext);
  console.log(contxt.isLoggedIn)
  return (
    <LoginContext>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          {!contxt.isLoggedIn && (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )}
          <Route path="/profile" >
            {/* {contxt.isLoggedIn &&  */}
            <UserProfile /> 
              {/* {contxt.isLoggedIn ? <UserProfile/> : <Redirect to="/auth" />} */}

           {/* <UserProfile /> */}
        {/* {contxt.isLoggedIn && <Redirect to="/auth" />} */}
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </LoginContext>
  );
}

export default App;
