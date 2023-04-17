import React, { useState } from "react";
import * as FontAwesomeFa from "react-icons/fa";
import "./OptionCard.css";
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
} from "framer-motion/dist/framer-motion";

const OptionCard = ({ data, open }) => {
  const { title, iconName, color } = data;
  const Icon = FontAwesomeFa[iconName];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  return (
    // <motion.div className="option" onClick={open} whileHover={{ scale: 1.1 }}>
    <motion.div
      layout
      className="option-closed"
      style={{ backgroundColor: color }}
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ scale: 1.1 }}
    >
      <Icon size={35} />
      <motion.h3>{title}</motion.h3>
      {isOpen && (
        <motion.div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
            commodi aut autem. Ullam ducimus voluptatibus, molestias itaque
            similique exercitationem facere!
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

// const Card = (props) => {
// 	// const { title, iconName, color } = data;
// 	const {data} = props;
// 	// const Icon = FontAwesomeFa[iconName];

// 	const [selectedId, setSelectedId] = useState(null);

// 	return (
// 		<>
// 			{data.map(item => (
// 				<motion.div key={item.id} className="option-closed" style={{backgroundColor: item.color}} layoutId={selectedId} onClick={() => setSelectedId(item.id)} whileHover={{ scale: 1.1 }} >
// 					<motion.h2>{item.title}</motion.h2>
// 				</motion.div>
// 			))}

// 			<AnimatePresence>
// 				{selectedId && (
// 					<motion.div layoutId={selectedId} className="option-open">
// 						<motion.h2>{data[selectedId].title}</motion.h2>
// 						{/* <motion.button onClick={() => setSelectedId(null)} /> */}
// 					</motion.div>
// 				)}
// 			</AnimatePresence>
// 		</>
// 	);
// };

// const Card = ({data}) => {};
/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

const Card = ({ data }) => {
  return (
    <AnimateSharedLayout>
      <motion.div layout className="content">
        {data.map((item) => (
          <Item key={item.id} />
        ))}
      </motion.div>
    </AnimateSharedLayout>
  );
};

const Item = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <motion.li
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
      className="item-card"
    >
      <motion.div
        layout
        onClick={toggleOpen}
        initial={{ borderRadius: 20 }}
        className="item-card"
      >
        <motion.div className="avatar" layout />
        <motion.h4>here</motion.h4>
        <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
      </motion.div>
    </motion.li>
  );
};

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="expanded-detail"
    >
      <div className="row" />
      <div className="row" />
      <div className="row" />
    </motion.div>
  );
}

export default Card;
