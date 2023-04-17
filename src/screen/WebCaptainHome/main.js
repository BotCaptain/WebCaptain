import captainBot2 from "../../assets/bot_no_bg.png";
import React from "react";
// import { motion  } from 'framer-motion';
import { theme } from "../../theme";
import BasicButton from "../../components/BasicButton/basicButton";
import SignUpForm from "../../components/SignUpForm/signUpForm";
import LogInForm from "../../components/LogInForm/logInForm";

const Main = () => {
  function scrollToElement(elementId) {
    const page = document.getElementById("start-here");
    const element = document.getElementById(elementId);

    page.scrollIntoView(page);
    setTimeout(
      () =>
        element ? element.focus() : console.log(`${elementId} does not exist`),
      500
    );
  }

  const scrollToLogin = () => scrollToElement("login");
  const scrollToSignup = () => scrollToElement("signup");
  return (
    <div className="container" style={{ color: theme.text }}>
      {/* Front Page */}
      <section className="row container vh-100 d-flex align-items-center justify-content-center">
        <div className="row col-8">
          <div style={{ width: "35%" }}>
            <img
              src={captainBot2}
              alt="logo"
              className="img-fluid col rounded-lg"
            />
          </div>
          <div className="col d-flex flex-column align-items-center">
            <div className="h-50">
              <h1 className="display-2 fw-bold">BotCaptain</h1>
              <h2 className="display-8 fw-light">
                | Virtual Teaching Assistant
              </h2>
            </div>
            <div className="h-50 w-100 d-flex flex-row justify-content-around align-content-center">
              <BasicButton
                text="Log In"
                onClick={scrollToLogin}
                color={theme.button1}
                className="btn btn-lg w-25 my-5"
              />
              <BasicButton
                text="Sign Up"
                onClick={scrollToSignup}
                color={theme.button1}
                className="btn btn-lg w-25 my-5"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="row container vh-100" id="start-here">
        {/* Sign Up/Log in */}
        <div className="row">
          <h2 className="display-2 pt-3 text-center">Start Here</h2>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-5">
            <p className="h2 fw-light text-center">Log In</p>
            <LogInForm></LogInForm>
          </div>
          <div className="col-5">
            <p className="h2 fw-light text-center">Sign Up</p>
            <SignUpForm></SignUpForm>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
