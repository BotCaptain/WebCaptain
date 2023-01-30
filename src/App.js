// Dependencies
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import SignUp from "./screen/Signup/signup";
import Main from "./screen/WebCaptainHome/main";
import LogIn from "./screen/Login/login";
import CreateTeam from "./screen/CreateTeam/createteam";
import JoinTeam from "./screen/JoinTeam/jointeam.js";

// Components
import ChatBot from "./screen/UserHomepage/userHomepage";

// Styles
import { theme } from "./theme";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Main color={theme.home} />} path="/" />
        <Route path="signup" element={<SignUp color={theme.signup} />} />
        <Route path="login" element={<LogIn color={theme.login} />} />
        <Route
          path="userhomepage"
          element={<ChatBot color={theme.userhomepage} />}
        />
        <Route path="createteam" element={<CreateTeam color={theme.createteam} />} />
        <Route path="jointeam" element={<JoinTeam color={theme.jointeam} />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
