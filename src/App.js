// Dependencies

import React, {useState} from 'react';
import { BrowserRouter} from 'react-router-dom';

// Components
import AnimatedRoutes from './components/AnimatedRoutes';
import UserContext from './context/userContext';

const App = () => {
	const [userContext, setUserContext]= useState({});

	return (
		<UserContext.Provider value={{ userContext, setUserContext }}>
			<BrowserRouter>
				<AnimatedRoutes/>
			</BrowserRouter>
		</UserContext.Provider>
	);
};

export default App;
