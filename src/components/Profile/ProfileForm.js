import classes from "./ProfileForm.module.css";
import AuthContext from "../../Store/AuthContext";
import { useRef, useContext } from "react";
import { useHistory } from 'react-router-dom';
const ProfileForm = () => {
  const history = useHistory();
  const passwordInputRef = useRef();
  const authctx = useContext(AuthContext);
  const submit = (e) => {
    e.preventDefault();
    const enteredPassword = passwordInputRef.current.value;
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCAddUzy56S_Fd9ynLhR2NrwXQPUB1M2i8', {
      method: "POST",
      body: JSON.stringify({
        idToken: authctx.token,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // setIsLoading(false);
        if (res.ok) {
          return res.json().then((data) => console.log(data));
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
    
            //   errorMessage = data.error.message;
            // }
            if(errorMessage){
              alert('SESSION EXPIRED LOGIN AGAIN')
              history.push('/auth');
            }

            throw new Error(errorMessage);
          });
        }
      })

      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={passwordInputRef} />
      </div>
      <div className={classes.action}>
        <button onClick={submit}>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
