/**
 * Header component
 * - Displays site header
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno';
import Component from 'inferno-component';
// import img from 'kalm-logo.png';

/* Local variables -----------------------------------------------------------*/


/* Component -----------------------------------------------------------------*/

class VideoComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div class="jumbotron">
					<div class="container">
						<div class="row">
							<div class="col-md-6 offset-md-3 text-center">
								<img src="http://kalm.js.org/src/images/logo.png" />

								<br />
								<br />

								<h1>Kalm <br /><small>The socket manager</small></h1>

								<p>Stabilization and optimization of Network communications in high debit applications</p>

								<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
								 	Kalm demo
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title" id="exampleModalLabel">Kalm demo</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
								<div class="embed-responsive embed-responsive-16by9">
									<iframe src="https://www.youtube.com/embed/tHbCkikFfDE" allowfullscreen></iframe>
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