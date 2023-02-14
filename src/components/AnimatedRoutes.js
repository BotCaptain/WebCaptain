// Dependencies
import '../App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';

// // Pages
import Main from '../screen/WebCaptainHome/main';
import CreateTeam from '../screen/CreateTeam/createteam';
import JoinTeam from '../screen/JoinTeam/jointeam';
import UserHomepage from '../screen/UserHomepage/userHomepage';

function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route index element={<Main />} path="/" />
				<Route path="userhomepage" element={<UserHomepage />} />
				<Route path="createteam" element={<CreateTeam />} />
				<Route path="jointeam" element={<JoinTeam />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;
