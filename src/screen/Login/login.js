import React, {useState, useContext} from 'react';
import NavigationButton from '../../components/NavigationButton/navigationButton';
import logo from '../../assets/logo.svg';
import { motion } from 'framer-motion/dist/framer-motion';
import LoginForm from '../../components/InputBox/loginForm';
import { Navigate } from 'react-router-dom';

import { theme } from '../../theme';
import './loginStyle.css';
import UserContext from '../../context/userContext';

const LogIn = (props) => {
	const [authenticated, setAuthenticated] = useState(false)
	const { userContext, setUserContext } = useContext(UserContext);

	return (
		<>
		{authenticated ? (
		<>
			<Navigate to="/userhomepage" replace={true} />
		</>):
		(
			<div className="screen" style={{ backgroundColor: props.color }}>
			<motion.div
			  className="screen-center"
			  initial={{ opacity: 0, scale: 0.5 }}
			  animate={{ opacity: 1, scale: 1 }}
			  transition={{
				duration: 0.6,
				delay: 0.3,
				ease: [0, 0.71, 0.2, 1.01],
			  }}
			>
			  <header className="header">
				<img src={logo} className="App-logo" alt="logo" />
				<h3>Log In</h3>
				<NavigationButton text="Home" color={theme.home} />
				<LoginForm  setAuthenticated={setAuthenticated} setUserContext/>
			  </header>
			</motion.div>
		  </div>
		)
		}
		</>
	);
};

export default LogIn;
