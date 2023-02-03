import React from 'react';
import logo from '../../assets/logo.svg';
import NavigationButton from '../../components/NavigationButton/navigationButton';
import BotCaptain from '../../components/ChatBot/bot';
import { motion } from 'framer-motion/dist/framer-motion';
import { theme } from '../../theme';

import './style.css';

function UserHomepage(props) {
  
	return (
		<motion.div 
			className="App" 
			style={{ backgroundColor: props.color }} 			
			initial={{width: 0}} 
			animate={{width: '100%'}} 
			exit={{x: window.innerWidth}}>
			<header className="SignUp-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
          Your homepage
				</p>
				<NavigationButton text="Home" color={theme.home} />
				<BotCaptain />
			</header>
		</motion.div>
	);
}

export default UserHomepage;
