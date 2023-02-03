import captainBot2 from '../../assets/bot_no_bg.png';
import CardButton from '../../components/CardButton/cardButton';
import React from 'react';
import { properties } from '../../example/data';
import { motion  } from 'framer-motion/dist/framer-motion';

// import {theme} from '../../theme';
import './mainStyle.css';

const Main = (props) => {
	return (
		<div className='screen' style={{ backgroundColor: props.color}}>
			<motion.div 
				className="screen-center" 
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.6,
					delay: 0.3,
					ease: [0, 0.71, 0.2, 1.01]
				}}>
				<header className="header">
					<img src={captainBot2} className="App-logo-static" alt="logo" />
					<h2>Welcome to BotCaptain</h2>
				</header>
				<motion.div className='options-row'>
					<motion.div style={{ display: 'flex', flexDirection: 'row' }}>
						{properties.map((item)=> (
							<CardButton 
								key={item.id}
								title={item.title}  
								route={item.route} 
								color={item.color}/>))}
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);



};


export default Main;
