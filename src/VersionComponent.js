/**
 * Version component
 * - Displays the version number
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno';
import Component from 'inferno-component';

/* Local variables -----------------------------------------------------------*/

const version = '^3.0.0';

/* Component -----------------------------------------------------------------*/

class VersionComponent extends Component {
	constructor(props) {
		super(props);
	}

	showVersion() {
		alert(`The version is: ${ version }!`);
	}

	render() {
		return (
			<div>
				<p>This is an Inferno Boilerplate example using <em>Inferno { version }</em>.</p>
				<button onClick={ this.showVersion }>Show version</button>
			</div>
		);
	}
}

/* Exports -------------------------------------------------------------------*/ 

export default VersionComponent;