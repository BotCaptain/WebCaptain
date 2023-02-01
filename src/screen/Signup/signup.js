import SignUpForm from "../../components/SignUpForm/signUpForm";
// import logo from '../../assets/logo.svg'
import React from 'react';
import MainButton from "../../components/MainButton/button"

// import SimpleForm from '../../components/ChatBot/constants/signupSteps';
import {theme} from '../../theme'

const SignUp = (props) => {
  return (
    <div className="App" style={{ backgroundColor: props.color }}>
      <header className="header">
        <h3>Sign Up</h3>
        <SignUpForm />
        <MainButton text="Home" color={theme.home} />
      </header>
    </div>
  );
};

export default SignUp;
