/**
 * Version component
 * - Displays the version number
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno';
import Component from 'inferno-component';
import VideoComponent from './VideoComponent';
import VideoComponentV2 from './VideoComponentV2';
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
				<VideoComponentV2 />
				<CodeComponent />
			</div>
		);
	}
}

/* Exports -------------------------------------------------------------------*/

export default LandingPageComponent;