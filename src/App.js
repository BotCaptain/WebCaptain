import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./screen/Signup/signup";
import Main from "./screen/WebCaptainHome/main";
import LogIn from "./screen/Login/login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Main />} path="/" />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
