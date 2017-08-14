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
				<div className="row">
					<div className="col-md-12">
						<footer className="footer">
							<h4>Copyrights © 2017 All Rights Reserved by Kalm</h4>
							<div id="footer-contact">
								<ul className="contact">
									<li><a href="https://github.com/kalm" rel="noopener noreferrer" target="_blank"><img src="./images/svg/github-icon.svg" className="pr-4" alt="github icon" /></a></li>
								</ul>
							</div>
						</footer>
					</div>
				</div>
			</div>
		);
	}
}

/* Exports -------------------------------------------------------------------*/

export default Footer;