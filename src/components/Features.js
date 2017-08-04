/**
 * Features component: text and images
 * It gives more details about the performance, 
 * the simple and practical usage
 * and how efficient it can handle possible hardware pressure
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno'; // eslint-disable-line
import Component from 'inferno-component';

/* Component -----------------------------------------------------------------*/

class Features extends Component {	
	render() {
		return (
			<div className="container features">
				<h2 className="section-title text-center my-5 pb-3">Features</h2>
				<div className="row">
					<div className="col-lg-6">
						<img className="rounded-circle feature-img hidden-sm-down" src="./images/optimize.png" alt="Generic placeholder image" />
						<div className="features-text section-text">
							<h4 className="description-btn">Network Optimizations</h4>
							<ul>
								<li>- Scaling is more predictable</li>
								<li>- Atomic congestion control settings</li>
								<li>- Reduces bandwidth from protocol overhead</li>
							</ul>
						</div>	
					</div>
					<div className="col-lg-6">
						<img className="rounded-circle feature-img hidden-sm-down" src="./images/use.png" alt="Generic placeholder image" />
						<div className="features-text section-text">
							<h4 className="description-btn">Simple usage</h4>
							<ul>
								<li>- Intuitive single syntax for all protocols</li>
								<li>- Feature parity for all protocols for multiplexing</li>
								<li>- Stats and monitoring-enabled</li>
							</ul>
						</div>	
					</div>
				</div>
				<div className="row">	
					<div className="col-lg-6">
						<img className="rounded-circle feature-img hidden-sm-down" src="./images/perform.png" alt="Generic placeholder image" />
						<div className="features-text section-text">
							<h4 className="description-btn">Performances</h4>
							<ul>
								<li>- Raw throughput up to 8x higher</li>
								<li>- Median latency (graphics)</li>
								<li>- Bandwidth (graphics)</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-6">
						<img className="rounded-circle feature-img hidden-sm-down" src="./images/pressure.png" alt="Generic placeholder image" />
						<div className="features-text section-text">
							<h4 className="description-btn">Hardware pressure</h4>
							<ul>
								<li>- (When running 10000 users in a typical scenario)</li>
								<li>- CPU usage is ~15% lower</li>
								<li>- RAM is ~10% lower</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

/* Exports -------------------------------------------------------------------*/ 

export default Features;