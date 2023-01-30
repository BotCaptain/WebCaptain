// import logo from "../../assets/logo.svg";
import MainButton from "../../components/MainButton/button";
import React from "react";
import SignUpForm from "../../components/SignUpForm/signUpForm";
import { theme } from "../../theme";

const SignUp = (props) => {
  return (
    <div className="App" style={{ backgroundColor: props.color }}>
      <header className="SignUp-header">
        <p>Sign Up</p>
        <SignUpForm />
        <MainButton text="Home" color={theme.home} />
      </header>
    </div>
  );
};

export default SignUp;
