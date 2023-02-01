// Dependencies
import './App.css';
import React from 'react';
import { BrowserRouter} from 'react-router-dom';

// Pages
// import SignUp from "./screen/Signup/signup";
// import Main from "./screen/WebCaptainHome/main";
// import LogIn from "./screen/Login/login";
// import CreateTeam from "./screen/CreateTeam/createteam";
// import JoinTeam from "./screen/JoinTeam/jointeam.js";
// import UserHomepage from "./screen/UserHomepage/userHomepage";

// Components
// import ChatBot from "./screen/UserHomepage/userHomepage";
import AnimatedRoutes from './components/AnimatedRoutes';

// Styles
// import { theme } from "./theme";

const App = () => {
	return (
		<BrowserRouter>
			<AnimatedRoutes/>
		</BrowserRouter>
	);
};

export default App;
