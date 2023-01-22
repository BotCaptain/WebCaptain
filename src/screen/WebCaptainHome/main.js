import logo from '../../assets/logo.svg'
import MainButton from "../../components/MainButton/button"
import React from "react";


const Main = () => {
    return (
      <div className="App">
      <header className="MainScreen-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to WebCaptain
        </p>
        <MainButton text='Log In'/>
        <MainButton text='Sign Up'/>
      </header>
    </div>
    )
  }

export default Main;