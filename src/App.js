import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./screen/Signup/signup";
import Main from "./screen/WebCaptainHome/main";
import LogIn from "./screen/Login/login";

export const colorScheme = {
  home:  '#8f17ebf6',
  signup:  '#10bb49e0',
  login:  '#d3b311eb',
};


export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Main color={colorScheme.home}/>} path="/" />
          <Route path="signup" element={<SignUp color={colorScheme.signup}/>} />
          <Route path="login" element={<LogIn color={colorScheme.login}/>} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
