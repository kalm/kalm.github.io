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
					<div className="row align-items-center">
						<div className="col-md-12 text-center">
							<h2 className="section-title mt-5 mb-2">Code sample</h2>
							<h3 className="section-subtitle">Easy-to-use single syntax for all protocols</h3>
						</div>

						<div className="col-md-6 mt-5">
							<pre>
								<code className="js p-5">
									{`
const Kalm = require('kalm');

// Listening for incoming UDP transactions on port 6000
const server = Kalm.listen({
  port: 6000
});

server.on('connection', (client) => {
  // Subscribe to 'user.action' channel
  client.subscribe('user.action', (req) => {
    /*
      req.body       The body of the request
      req.client     The connection handle reference
      req.frame      The details of the network frame
      req.session    The session store for that connection
    */
  });

  // Broadcast to all connections subscribed to the channel 'user.join'
  server.broadcast('user.join', { foo: 'bar' });
});
									`}
								</code>
							</pre>
						</div>

						<div className="col-md-6 text-center my-5">
							<img src="./images/svg/server-icon.svg" alt="server icon" />
							<h4 className="description-btn pb-3">Setting up the server</h4>
							<button type="button" className="btn btn-default btn-doc mb-5">Getting started</button>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-6 text-center my-5">
							<img src="./images/svg/code-icon.svg" className="code-icon" alt="code icon" />
							<h4 className="description-btn p-3">Setting up the client</h4>
							<a href="./docs/index.html" className="btn btn-default btn-doc mb-5">Documentation</a>
						</div>

						<div className="col-md-6 my-5">
							<pre>
								<code className="js p-5">
									{`
import Kalm from 'kalm';

// Opens a connection to the server
// Port, transport and serial settings should match
const client = Kalm.connect({
	hostname: '0.0.0.0', // Server's IP
	port: 6000 // Server's port
});

client.write('user.action', {body: 'This is an object!'});
client.subscribe('user.join', () => { //... });
									`}
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