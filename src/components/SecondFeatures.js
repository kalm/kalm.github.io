/**
 * Second Features component
 * This is another(the same but different design) features and some information
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno'; // eslint-disable-line
import Component from 'inferno-component';
// import style from 'style.js';

/* Component -----------------------------------------------------------------*/

class SecondFeatures extends Component {
	render() {
		return (
			<div className="container features">
				<div className="row">
					<div className="col-lg-6 select1">
						<ul>
							<h3>Network Optimizations</h3>
							<li> Scaling is more predictable</li>
							<li> Atomic congestion control settings</li>
							<li> Reduces bandwidth from protocol overhead</li>
						</ul>
						<img className="rounded-circle feat-img-1" src="./image/optimize.png" alt="Generic placeholder image" />
					</div>
					<div className="col-lg-6 select2">
						<img className = "rounded-circle feat-img-2" src="./image/simple.png" alt="Generic placeholder image" />
						<ul>
							<h3>Simple usage</h3>
							<li> Intuitive single syntax for all protocols</li>
							<li> Feature parity for all protocols for multiplexing</li>
							<li> Stats and monitoring-enabled</li>
						</ul>
					</div>

					<div className="col-lg-6 select3">						
						<ul>
							<h3>Performances</h3>
							<li> Raw throughput up to 8x higher </li>
							<li> Median latency </li>
							<li> Bandwidth </li>
						</ul>
						<img className="rounded-circle feat-img-3" src="./image/perform.png" alt="Generic placeholder image" />
					</div>					
					<div className="col-lg-6 select4">
						<img className="rounded-circle feat-img-4" src="./image/pressure.png" alt="Generic placeholder image" />			
						<ul>
							<h3>Hardware pressure</h3>
							<li> (When running 10000 users in a typical scenario)</li>
							<li> CPU usage is ~15% lower</li>
							<li> RAM is ~10% lower</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

/* Exports -------------------------------------------------------------------*/ 

export default SecondFeatures;