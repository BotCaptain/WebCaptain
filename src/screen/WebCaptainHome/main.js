// import logo from '../../assets/logo.svg'
import captainBot2 from '../../assets/bot_no_bg.png'
import MainButton from "../../components/MainButton/button"
import React from "react";
import {theme} from '../../theme'


const Main = (props) => {
    return (
      <div className="App" style={{ backgroundColor: props.color }}>
      <header className="MainScreen-header">
        <img src={captainBot2} className="App-logo-static" alt="logo" />
        <p>
          Welcome to BotCaptain
        </p>
        <MainButton text='Log In' color={theme.login}/>
        <MainButton text='Sign Up' color={theme.signup}/>
        <MainButton text='User Homepage' color={theme.userhomepage}/>
      </header>
    </div>
    )
  }

export default Main;