/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno'; // eslint-disable-line
import Component from 'inferno-component';

/* Component -----------------------------------------------------------------*/

class VideoComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="z-bottom">
				<div className="img-bg-header" id="large-header">
					<canvas id="demo-canvas" style="position: absolute"></canvas>
					<div className="container spacing-1x">
						<div className="row align-items-center">
							<div className="col-md-12 text-center text-white">
								<div className="">
									<img src="./images/kalm-logo.png" className="pt-3 mb-4 hidden-sm-down" />
									<h1 className="title pt-3">The Socket Manager</h1>
									<p className="sub-title">Network Communications stabilization and optimization<br className="hidden-sm-down" /> for high debit applications</p>

									<button type="button" className="btn btn-default btn-custom mb-5" data-toggle="modal" data-target="#exampleModal">
										Kalm demo
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">Kalm demo</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="embed-responsive embed-responsive-16by9">
									<iframe src="https://www.youtube.com/embed/tHbCkikFfDE" allowFullScreen></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

/* Exports -------------------------------------------------------------------*/

export default VideoComponent;