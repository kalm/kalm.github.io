/**
 * Footer component
 * This is the footer with the Github link
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno';
import Component from 'inferno-component';
import style from 'style.js';

/* Component -----------------------------------------------------------------*/

class Footer extends Component {
	render() {
		return (
			<div class="container">
				<footer class="footer">
					<h4>Copyrights © 2017 All Rights Reserved by Kalm</h4>
					<div id="footer-contact">
					<ul class="contact">
						<li><a href="#"><img src="./image/github.png" /></a></li>
					</ul>
					</div>
				</footer>
			</div>	
		);
	}
}

/* Exports -------------------------------------------------------------------*/ 

export default Footer;