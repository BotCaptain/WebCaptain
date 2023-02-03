// Dependencies

import React from 'react';
import { BrowserRouter} from 'react-router-dom';

// Components
import AnimatedRoutes from './components/AnimatedRoutes';

const App = () => {
	return (
		<BrowserRouter>
			<AnimatedRoutes/>
		</BrowserRouter>
	);
};

export default App;
