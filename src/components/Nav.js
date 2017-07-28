/**
 * Nav component
 * This is the menu and the search bar
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno';
import Component from 'inferno-component';
import style from 'style.js';

/* Component -----------------------------------------------------------------*/

class Navbar extends Component {
	render() {
		return (
			<div class="container">
			<nav class="navbar navbar-toggleable-md navbar-fixed-top navbar-light bg-faded">
				<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<a class="navbar-brand" href="index.html"><img src="./image/logo.png" alt="logo" class="logo" /></a>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Documentation</a>
						</li>
						<li class="nav-item">
						<a class="nav-link" href="#">Getting started</a>
						</li>
					</ul>
					<form class="form-inline my-2 my-lg-0">
						<input class="form-control mr-sm-2" type="text" placeholder="Search" />
						<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>
			</nav>
		</div>
		);
	}
}

/* Exports -------------------------------------------------------------------*/ 

export default Navbar;