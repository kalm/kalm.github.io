/**
 * Dynamic Component wrapper
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno'; // eslint-disable-line

// Importing SASS
// require('./assets/scss/style.scss');

/* Exports -------------------------------------------------------------------*/

export default function Wrapper({ children }) {
	return (
		<div>
			{ children }
		</div>
	);
}