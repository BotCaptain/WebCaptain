import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from "styled-components";
import {steps} from './constants/botSteps';

import {theme} from '../../theme'
import './chatbot.css'


const CHATBOT_THEME = {
    background: "#FFFEFC",
    fontFamily: "Inter",
    headerBgColor: theme.login,
    headerFontColor: "#fff",
    headerFontSize: "20px",
    botBubbleColor: theme.login,
    botFontColor: "#fff",
    userBubbleColor: theme.login,
    userFontColor: "#fff",
  };

// class BotCaptain extends Component {
//   render() {
//     return (
//       <ThemeProvider theme={CHATBOT_THEME}>
//       <ChatBot 
//        steps={steps}
//       />
//       </ThemeProvider>
//     );
//   }
       
// }


const BotCaptain = () =>{

  return (
    <>
      <ThemeProvider theme={CHATBOT_THEME}>
        <ChatBot steps={steps} floating={true} />
      </ThemeProvider>
    </>
  );
}

export default BotCaptain;