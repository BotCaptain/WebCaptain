import React, {useContext} from 'react';
import ChatBot from 'react-simple-chatbot';
import bot_icon from '../../assets/bot_no_bg_portrait.png'
import { ThemeProvider } from "styled-components";
import {steps} from './constants/botSteps';

import './bot.css'


const CHATBOT_THEME = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#53bfdb",
    headerFontColor: "#ffffff",
    headerFontSize: "25px",
    botBubbleColor: "#53bfdb",
    botFontColor: "#ffffff",
    userBubbleColor: "#fffa",
    userFontColor: "#69656d"
  };

// Set some properties of the bot
const config = {
  headerTitle: 'BotCaptain',
  botAvatar: bot_icon,
  floating: false,
};

const BotCaptain = () =>{
  return (
    <div className='bot'>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot  steps={steps} bubbleStyle={{ fontSize: '14px', fontWeight: 'bold' }} {...config}/>
      </ThemeProvider>
    </div>
  );
}

export default BotCaptain;