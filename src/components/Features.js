/**
 * Featurescomponent
 * This is the features and some information
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno';
import Component from 'inferno-component';
import style from 'style.js';

/* Component -----------------------------------------------------------------*/

class Features extends Component {	
	render() {
		return (
			<div class="container features">
			<div class="row">
				<div class="col-lg-6">
					<img class="rounded-circle feature-img" src="./image/optimize.png" alt="Generic placeholder image" />

					<ul>
						<h3>Network Optimizations</h3>
						<li>- Scaling is more predictable</li>
						<li>- Atomic congestion control settings</li>
						<li>- Reduces bandwidth from protocol overhead</li>
					</ul>
				</div>
				<div class="col-lg-6">
					<img class="rounded-circle feature-img" src="./image/use.png" alt="Generic placeholder image" />

					<ul>
						<h3>Simple usage</h3>
						<li>- Intuitive single syntax for all protocols</li>
						<li>- Feature parity for all protocols for multiplexing</li>
						<li>- Stats and monitoring-enabled</li>
					</ul>
				</div>
				<div class="col-lg-6">
					<img class="rounded-circle feature-img" src="./image/perform.png" alt="Generic placeholder image" />

					<ul>
						<h3>Performances</h3>
						<li>- Raw throughput up to 8x higher ( graphics will be included)</li>
						<li>- Median latency (graphics)</li>
						<li>- Bandwidth (graphics)</li>
					</ul>
				</div>
				<div class="col-lg-6">
					<img class="rounded-circle feature-img" src="./image/pressure.png" alt="Generic placeholder image" />

					<ul>
						<h3>Hardware pressure</h3>
						<li>- (When running 10000 users in a typical scenario)</li>
						<li>- CPU usage is ~15% lower</li>
						<li>- RAM is ~10% lower</li>
					</ul>
				</div>
			</div>
		</div>
		);
	}
}

/* Exports -------------------------------------------------------------------*/ 

export default Features;