import logo from '../../assets/logo.svg'
import React from 'react';
import MainButton from "../../components/MainButton/button";
import BotCaptain from '../../components/ChatBot/bot';
import {theme} from '../../theme'

import './style.css'
const ChatBot = (props) => {

    return (
      <div className="App" style={{ backgroundColor: props.color }}>
      <header className="SignUp-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Your homepage
        </p>
        <MainButton text='Home' color={theme.userhomepage}/> 
        <BotCaptain/>
      </header>
    </div>
    )
  }

export default ChatBot;