import React, { FunctionComponent } from 'react';
import './style.css';

export const Footer: FunctionComponent = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<a href="https://jojonarte.github.io">Jojo Narte</a>
			<br />
			{currentYear}
		</footer>
	);
};
