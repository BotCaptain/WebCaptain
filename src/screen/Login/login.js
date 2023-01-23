import logo from '../../assets/logo.svg'
import React from 'react';
import MainButton from "../../components/MainButton/button"
import InputBox from "../../components/InputBox/inputBox"

import {theme} from '../../theme'


const LogIn = (props) => {
    return (
      <div className="App" style={{ backgroundColor: props.color }}>
      <header className="LogIn-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Log In
        </p>
        <MainButton text='Home' color={theme.home}/>
        <InputBox/>
      </header>
    </div>
    )
  }

export default LogIn;