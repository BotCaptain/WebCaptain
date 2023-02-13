import React, {useContext} from 'react';
import logo from '../../assets/logo.svg';
import NavigationButton from '../../components/NavigationButton/navigationButton';
import BotCaptain from '../../components/ChatBot/bot';
import { motion } from 'framer-motion/dist/framer-motion';
import { theme } from '../../theme';

import './dashboard.css';

// Context
import UserContext from '../../context/userContext';

function UserHomepage(props) {
	const {userContext, setUserContext} = useContext(UserContext);

	return (
		<div className="screen-dashboard" style={{ backgroundColor: props.color }}>
			<motion.div 
				className="App" 
				style={{ backgroundColor: props.color }} 			
				initial={{ opacity: 0, scale: 0.2 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
				duration: 1.4,
				delay: 0.5,
				ease: [0, 0.7, 0.3, 1],
				}}
				>
				<header className="header-dashboard">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>
						Hello {userContext.given_name}! 
					</h2>
					<h2>
						Welcome to your user homepage
					</h2>
					<NavigationButton text="Home" color={theme.home} />
					<BotCaptain />
				</header>
			</motion.div>
		</div>
	);
}

export default UserHomepage;
