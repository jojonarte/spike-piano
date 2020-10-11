import React from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Logo } from './components/Logo/Logo';
import { Main } from './components/Main/Main';

function App() {
	return (
		<div className="app">
			<Logo />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
