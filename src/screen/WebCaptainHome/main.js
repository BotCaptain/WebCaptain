// import logo from '../../assets/logo.svg'
import botIcon from '../../assets/bot.svg'
import MainButton from "../../components/MainButton/button"
import React from "react";
import {theme} from '../../theme'


const Main = (props) => {
    return (
      <div className="App" style={{ backgroundColor: props.color }}>
      <header className="MainScreen-header">
        <img src={botIcon} className="App-logo" alt="logo" />
        <p>
          Welcome to WebCaptain
        </p>
        <MainButton text='Log In' color={theme.login}/>
        <MainButton text='Sign Up' color={theme.signup}/>
        <MainButton text='User Homepage' color={theme.userhomepage}/>
      </header>
    </div>
    )
  }

export default Main;