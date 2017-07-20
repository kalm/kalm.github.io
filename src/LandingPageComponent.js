/**
 * Version component
 * - Displays the version number
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno';
import Component from 'inferno-component';
import VideoComponent from './VideoComponent';
import CodeComponent from './CodeComponent';

/* Local variables -----------------------------------------------------------*/

/* Component -----------------------------------------------------------------*/

class LandingPageComponent extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div>
				<VideoComponent />
				<CodeComponent />
			</div>
		);
	}
}

/* Exports -------------------------------------------------------------------*/

export default LandingPageComponent;