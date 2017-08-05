/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno'; // eslint-disable-line
import Component from 'inferno-component';

/* Component -----------------------------------------------------------------*/

class GraphicComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="stripe-1 z-bottom">
				<div className="network-bg">
					<div className="container spacing-1x">
						<div className="row">
							<div className="col-12 text-center">
								<h2 className="section-title-light pt-3 mt-5">Performance</h2>
								<p className="py-4 section-subtitle-light">
										Lorem ipsum dolor sit amet, consectetur<br hidden-sm-down /> adipisicing elit,
					sed do eiusmod tempor incididunt ut labore.</p>
							</div>
						</div>

						<div className="row mb-5">
							<div className="col-md-6">
								<img src="./images/performance.png" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

/* Exports -------------------------------------------------------------------*/

export default GraphicComponent;