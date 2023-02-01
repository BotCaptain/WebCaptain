// import logo from '../../assets/logo.svg'
// import MainButton from '../../components/MainButton/button';
import captainBot2 from '../../assets/bot_no_bg.png';
import CardButton from '../../components/CardButton/cardButton';
import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

import {theme} from '../../theme';
import './main.css';
const Main = (props) => {
    
	const cards = [
		{title: 'Existing User', route: 'login'},
		{title: 'New User', route: 'signup'}
	];

	return (
		<motion.div 
			className="MainScreen" 
			style={{ backgroundColor: props.color }}
			initial={{opacity: 0}} 
			animate={{opacity: 1}} 
			exit={{opacity:0}}>
			<header className="MainScreen-header">
				<img src={captainBot2} className="App-logo-static" alt="logo" />
				<h2>
           Welcome to BotCaptain
				</h2>
			</header>

			<div className='center'>
				<div className='row'>
					{cards.map((item, index)=> {
						return (
							<CardButton 
								key={index} 
								title={item.title} 
								route={item.route} 
								color={theme[item.route]}/>

						);
					})}
				</div>
			</div>
		</motion.div>
	);



};


export default Main;
