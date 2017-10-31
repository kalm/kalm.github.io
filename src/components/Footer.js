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
			<footer className="footer">
				<div className="footer-copyright">
					<div className="footer-copyright-text">Copyrights © 2017 All Rights Reserved by Kalm</div>
				</div>
				<div className="footer-contact">
					<a href="https://github.com/kalm" rel="noopener noreferrer" target="_blank"><img src="./images/svg/github-icon.svg" alt="github icon" /></a>
				</div>
			</footer>
		);
	}
}

/* Exports -------------------------------------------------------------------*/

export default Footer;