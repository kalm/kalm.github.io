/**
 * Nav component
 * This is the menu will allow users to access different pages
 * such as documentation and getting started 
 * and the search bar provide a quick search for files 
 */
/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno'; // eslint-disable-line
import Component from 'inferno-component';

/* Component -----------------------------------------------------------------*/

class Navbar extends Component {
	render() {
		return (
			<div className="container">
				<nav className="navbar navbar-toggleable-md navbar-fixed-top navbar-light bg-faded">
					<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<a className="navbar-brand" href="index.html"><img src="../public/image/logo.png" alt="logo" className="logo" /></a>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Documentation</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Getting started</a>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="text" placeholder="Search" />
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</form>
					</div>
				</nav>
			</div>
		);
	}
}

/* Exports -------------------------------------------------------------------*/ 

export default Navbar;