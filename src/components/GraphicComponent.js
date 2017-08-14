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
								<h2 className="section-title-light py-5 mt-5">Performance analysis</h2>
							</div>
						</div>

						<div className="row mb-5">
							<div className="col-md-7">
								<div id="barchart_material" style="height: 400px;"></div>
							</div>

							<div className="col-md-5 pl-5">
								<h3 className="section-subtitle-light mt-5 pt-5">Bytes transfered</h3>
								<p className="section-text-light">Bundled calls means that you only send the protocol headers (40 bytes + application overhead) once. This makes a huge difference when you need to send a large number of small packets.</p>
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