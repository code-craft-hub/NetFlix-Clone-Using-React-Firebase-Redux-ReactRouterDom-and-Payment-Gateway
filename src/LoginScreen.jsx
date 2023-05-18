import React, { useState } from "react";
import "./LoginScreen.css";
import navlogo from "./assets/TJTEK.jpg";

import SignupScreen from "./SignupScreen";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  const history = useNavigate();
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img onClick={() => history("/home")}
          className="loginScreen__logo"
          src={navlogo}
          alt=""
        />

        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.{" "}
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <a href="https://paystack.com/pay/tkteck"
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </a>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
