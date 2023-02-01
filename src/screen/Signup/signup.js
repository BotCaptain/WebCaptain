// Dependencies
import React from 'react';
import MainButton from '../../components/MainButton/button';
import { motion } from 'framer-motion/dist/framer-motion';

// Components
import SignUpForm from '../../components/SignUpForm/signUpForm';

// Stylig
import {theme} from '../../theme';
import './style.css';


// import logo from '../../assets/logo.svg'
// import SimpleForm from '../../components/ChatBot/constants/signupSteps';




const SignUp = (props) => {
	// const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
	return (
		<motion.div 
			className="App" 
			style={{ backgroundColor: props.color }} 
			initial={{opacity: 0}} 
			animate={{opacity: 1}} 
			exit={{opacity:0}}>

			<header className="header">
				<h3>Sign Up</h3>
				<SignUpForm />
				<MainButton text="Home" color={theme.home} />
			</header>
		</motion.div>
	);
};

export default SignUp;
