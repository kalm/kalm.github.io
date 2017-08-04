/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno'; // eslint-disable-line
import Component from 'inferno-component';

/* Component -----------------------------------------------------------------*/

class CodeComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="stripe-1">
				<div className="container pt-5">
					<div className="row">
						<div className="col-md-12 text-center">
							<h2 className="section-title mt-5">Code sample</h2>
							<p className="py-3 section-subtitle">
									Lorem ipsum dolor sit amet, consectetur<br hidden-sm-down /> adipisicing elit,
				sed do eiusmod tempor incididunt ut labore.</p>
						</div>

						<div className="col-md-6 mt-5">
							<pre className="well">
								<code className="js code-custom ">
									code
								</code>
							</pre>
						</div>

						<div className="col-md-6 text-center my-5">
							<h4 className="description-btn">Server</h4>
							<h3 className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</h3>
							<button type="button" className="btn btn-default btn-doc mb-5">Getting started</button>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md-6 text-center my-5">
							<h4 className="description-btn">Client</h4>
							<h3 className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</h3>
							<button type="button" className="btn btn-default btn-doc mb-5">Documentation</button>
						</div>

						<div className="col-md-6 my-5">
							<pre className="well">
								<code className="code-custom">
									Code
								</code>
							</pre>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

/* Exports -------------------------------------------------------------------*/

export default CodeComponent;