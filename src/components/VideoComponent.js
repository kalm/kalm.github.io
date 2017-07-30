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
			<div>
				<div className="main-image my-5">
					<div className="container mt-5 pt-5">
						<div className="row">
							<div className="col-md-6 text-center">

								<h1>Kalm <br /><small>The socket manager</small></h1>

								<p>Stabilization and optimization of Network communications in high debit applications</p>

								<button type="button" className="btn btn-primary btn-demo" data-toggle="modal" data-target="#exampleModal">
								Kalm demo
								</button>
							</div>

							<div className="col-md-6 text-center">
								
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