/**
 * Header component
 * - Displays site header
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno';
import Component from 'inferno-component';

/* Local variables -----------------------------------------------------------*/


/* Component -----------------------------------------------------------------*/

class HeaderComponent extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div>
				<div>

					<iframe style="background-color: red; padding: 20px;" width="560" height="315" src="https://www.youtube.com/embed/tHbCkikFfDE" frameborder="0" allowfullscreen></iframe>
			
				</div>
			</div>
		);
	}
}

/* Exports -------------------------------------------------------------------*/

export default HeaderComponent;