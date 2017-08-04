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
						<div className="col-md-12">
							<h2 className="section-title text-center pb-4 my-5">Getting started</h2>
						</div>

						<div className="col-md-6 mt-5">
							<pre className="well">
								<code className="js code-custom ">
									code
								</code>
							</pre>
						</div>

						<div className="col-md-6 text-center my-5">
							<h4 className="description-btn">Setting up your server</h4>
							<button type="button" className="btn btn-default btn-doc mb-5">Documentation</button>
						</div>

					</div>
				</div>

				<div className="container pt-5">
					<div className="row">
						<div className="col-md-6 text-center my-5">
							<h4 className="description-btn">Setting up your server</h4>
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