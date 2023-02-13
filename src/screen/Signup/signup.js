// Dependencies
import React, {useContext} from 'react';
import NavigationButton from '../../components/NavigationButton/navigationButton';
import { motion } from 'framer-motion/dist/framer-motion';

// Components
import SignUpForm from '../../components/SignUpForm/signUpForm';

// Stylig
import {theme} from '../../theme';
import './signupStyle.css';


const SignUp = (props) => {
	return (
		<div className="screen" style={{ backgroundColor: props.color }} >
			<motion.div 
				className="screen-center" 
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.6,
					delay: 0.3,
					ease: [0, 0.71, 0.2, 1.01]
				}}>
				<header className="header">
					<h3>Sign Up</h3>
					<SignUpForm />
					<br/>
					<NavigationButton text="Home" color={theme.home} />
				</header>
			</motion.div>
		</div>
	);
};

export default SignUp;
