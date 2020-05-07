import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';

const Hats = () => <h1>HATS</h1>;

function App() {
	return (
		<div>
			<Route exact path='/' component={Homepage} />
			<Route exact path='/shop/hats' component={Hats} />
		</div>
	);
}

export default App;
