import logo from '../../assets/logo.svg'
import React from 'react';
import MainButton from "../../components/MainButton/button"

import SimpleForm from '../../components/ChatBot/constants/signupSteps';
import {theme} from '../../theme'


const SignUp = (props) => {

    return (
      <div className="App" style={{ backgroundColor: props.color }}>
      <header className="SignUp-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Sign Up
        </p>
        <MainButton text='Home' color={theme.home}/> 
        <SimpleForm></SimpleForm>
      </header>
    </div>
    )
  }

export default SignUp;