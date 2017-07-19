/**
 * Landing Page
 * - Loads all the required components
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno'; // eslint-disable-line

import ExampleComponent from '../components/ExampleComponent';

/* Exports -------------------------------------------------------------------*/

export default function LandingPage() {
	return (
		<div>
			<h1>Landing Page</h1>
			<ExampleComponent></ExampleComponent>
		</div>
	);
}