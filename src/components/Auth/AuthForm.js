import { useState, useRef } from 'react';
import { auth } from './firebase';

import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setLoading] = useState(false);
const emailInputRef=useRef()
const  passwordInputRef=useRef()
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    setLoading(false)
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    setLoading(true)
const enteredemail=emailInputRef.current.value; 
const enteredPassword = passwordInputRef.current.value;
if(isLogin){
const auth = getAuth();
signInWithEmailAndPassword(auth, enteredemail, enteredPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setLoading(false)
    console.log("Logged In as: ", user.email);
    // ...
  })
  .catch((error) => {
    setLoading(false)
    alert(error.message)
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}else{
 
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, enteredemail, enteredPassword)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("User's email is: ", user.email,user);
      setLoading(false)
      // ...
    })
    .catch((error) => {
      console.log(error.code,error.message)
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoading(false)
      alert(error.message)
      // ..
    });
}

  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {isLoading && <p>...sending request</p>}
       {!isLoading &&  <button onClick={submitHandler}> Submit </button>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
