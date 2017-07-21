/**
 * Footer component
 * This is the footer with the Github link
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
			<div class="container">
				<footer class="footer">
					<h4>Copyrights © 2017 All Rights Reserved by Kalm</h4>
					<div id="footer-contact">
					<ul class="contact">
						<li><a href="#"><img src="./image/github.png"></a></li>
					</ul>
					</div>
				</footer>
			</div>	
		);
	}
}

/* Exports -------------------------------------------------------------------*/ 

export default VersionComponent;