import logo from '../../assets/logo.svg'
import React from 'react';
import MainButton from "../../components/MainButton/button"

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
      </header>
    </div>
    )
  }

export default SignUp;