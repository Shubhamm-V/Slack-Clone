import { Button } from "@mui/material";
import React from "react";
import classes from "./Login.module.css";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { loginActions } from "../../redux/redux";
function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(loginActions.login({ user: result.user }));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const demoLogin = () => {
    dispatch(
      loginActions.login({
        user: {
          displayName: "Demo User",
          photoURL: "https://bams.treasury.kerala.gov.in/images/avatar5.png",
        },
      })
    );
  };
  return (
    <div className={classes.login}>
      <div className={classes["login__container"]}>
        <img
          src="https://images.prismic.io/smarttask/1c150a8e-9f13-420e-8b0f-e6365219250f_slack.png"
          alt="slack"
        />
        <h3>Sign in to Shubham's Slack</h3>
        <p>shubhamvyavhare.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
        <Button onClick={demoLogin}>Demo Login</Button>
      </div>
    </div>
  );
}

export default Login;
