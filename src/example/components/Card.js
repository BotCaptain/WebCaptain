// import React, { useState } from 'react';
// import OptionCard from './OptionCard';
// import Overlay from './Overlay';
// import Modal from './Modal';
// import { AnimatePresence } from 'framer-motion/dist/framer-motion';

// const Card = ({ data }) => {
// 	const [open, setOpen] = useState(false);
// 	const [selected, setSelected] = useState(null);

// 	const openModal = () => {
// 		setOpen(true);
// 	};

// 	const closeModal = () => {
// 		setOpen(false);
// 	};

// 	return (
// 		<>
// 			<OptionCard data={data} open={openModal}/>
// 			{/* <AnimatePresence>
// 				{open && (
// 					<Overlay close={closeModal}>
// 						<Modal data={data} close={closeModal} />
// 					</Overlay>
// 				)}
// 			</AnimatePresence> */}
// 		</>
// 	);
// };

// export default Card;