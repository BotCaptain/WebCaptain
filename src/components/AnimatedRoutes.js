// Dependencies
import '../App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

// // Pages
import SignUp from '../screen/Signup/signup';
import Main from '../screen/WebCaptainHome/main';
import LogIn from '../screen/Login/login';
import CreateTeam from '../screen/CreateTeam/createteam';
import JoinTeam from '../screen/JoinTeam/jointeam';
import UserHomepage from '../screen/UserHomepage/userHomepage';

// Styles
import { theme } from '../theme';

function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route index element={<Main color={theme.home} />} path="/" />
				<Route path="signup" element={<SignUp color={theme.signup} match={null} />} />
				<Route path="login" element={<LogIn color={theme.login} />} />
				<Route path="userhomepage" element={<UserHomepage color={theme.userhomepage} />} />
				<Route path="createteam" element={<CreateTeam color={theme.createteam} />} />
				<Route path="jointeam" element={<JoinTeam color={theme.jointeam} />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
