import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import AuthContext from "../../Store/AuthContext";
const MainNavigation = () => {
  const authctx = useContext(AuthContext);
  // const status=authctx.isLoggedIn;
  const logoutHandler=()=>{
    authctx.logout();
    // localStorage.setItem('token',null)
  }
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
         {!authctx.isLoggedIn &&  <li>
            <Link to="/auth">Login</Link>
          </li>}
          {authctx.isLoggedIn && (
            <ul>
          
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
