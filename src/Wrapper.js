/**
 * Dynamic Component wrapper
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno'; // eslint-disable-line

/* Exports -------------------------------------------------------------------*/

export default function Wrapper({ children }) {
	return (
		<div>
			{ children }
		</div>
	);
}