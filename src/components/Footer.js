/**
 * Footer component
 * This is the footer with the Github link,
 * and the copyright
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno'; // eslint-disable-line
import Component from 'inferno-component';

/* Component -----------------------------------------------------------------*/

class Footer extends Component {
	render() {
		return (
			<div className="container-fluid footer-custom">
				<footer className="footer">
					<h4>Copyrights © 2017 All Rights Reserved by Kalm</h4>
					<div id="footer-contact">
						<ul className="contact">
							<li><a target="blank" href="https://github.com/kalm"><img className="img-git" src="./images/github.png" /></a></li>
						</ul>
					</div>
				</footer>
			</div>	
		);
	}
}

/* Exports -------------------------------------------------------------------*/ 

export default Footer;