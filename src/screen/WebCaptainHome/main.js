// import logo from '../../assets/logo.svg'
import captainBot2 from '../../assets/bot_no_bg.png'
import MainButton from "../../components/MainButton/button"
import CardButton from '../../components/CardButton/cardButton';
import React from "react";
import {theme} from '../../theme'


const Main = (props) => {
    
    const cards = [
      {title: "Existing User", route: 'login'},
      {title: "New User", route: 'signup'}
    ]

    return (
      <div className="MainScreen" style={{ backgroundColor: props.color }}>
      <header className="MainScreen-header">
        <img src={captainBot2} className="App-logo-static" alt="logo" />
        <h2>
          Welcome to BotCaptain
        </h2>
        </header>

        <div className='center'>
          <div className='row'>
          {cards.map((item)=> {
              return (
                <CardButton title={item.title} route={item.route} color={theme[item.route]}></CardButton>
              )
              })}
          </div>

          </div>
        </div>
    )
  }

{/* <MainButton text='Create Team' color={theme.createteam}/>
<MainButton text='Join Team' color={theme.jointeam}/>
<MainButton text='Sign Up' color={theme.signup}/> 
<MainButton text='Log In' color={theme.login}/> 
<button className='column box button' onClick={()=>setIsNew(false)}>
  <h2>Existing User</h2>
<MainButton text='Log In' color={theme.login}/>
<MainButton text='Sign Up' color={theme.signup}/>
</button>
<button className='column box button' onClick={()=>setIsNew(true)}>
  <h2>New user</h2>
<MainButton text='Create Team' color={theme.createteam}/>
<MainButton text='Join Team' color={theme.jointeam}/>
</button>  */}
export default Main;
