import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./screen/Signup/Signup";
import Main from "./screen/WebCaptainHome/Main";
import LogIn from "./screen/Login/Login";
import ChatBot from "./screen/UserHomepage/UserHomepage";

import {theme} from './theme'

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Main color={theme.home}/>} path="/" />
          <Route path="signup" element={<SignUp color={theme.signup}/>} />
          <Route path="login" element={<LogIn color={theme.login}/>} />
          <Route path="userhomepage" element={<ChatBot color={theme.userhomepage}/>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App