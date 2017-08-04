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

						<div className="col-md-6">
							<pre className="well">
								<code>
									<span className="highlight-1">{'const'}</span> <span className="highlight-2">{'Kalm'}</span><span className="highlight-1"> = </span><span className="highlight-2">{'require'}</span>{'(\'kalm\');'}
									<br />
									<br />
									<span className="highlight-4">// Listening for incoming UDP transactions on port 6000</span>
									<br />
									<span className="highlight-1">{'const'}</span> <span className="highlight-2">{'server'}</span><span className="highlight-1"> = </span>{' Kalm.'}<span className="highlight-3">{'listen'}</span>{'({ '}{`
  port`}<span className="highlight-1">: </span><span className="highlight-2">{'6000'}</span><br />
});
<br />
<br />

<span>{'server.'}</span><span className="highlight-3">on</span>{'(\'connection\'), (client)'}<span className="highlight-1">{' =\> '}</span>{'{ '}<br />
<span className="highlight-4"> // Subscribe to 'user.action' channel</span>
<br />
&nbsp;<span>{'client.'}</span><span className="highlight-3">subscribe</span>{'(\'user.action\'), (req)'}<span className="highlight-1">{' =\> '}</span>{'{ '}<br />
&nbsp;&nbsp;<span className="highlight-4">/*<br />
&nbsp;&nbsp;&nbsp;&nbsp;req.body&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The body of the request<br />
&nbsp;&nbsp;&nbsp;&nbsp;req.client&nbsp;&nbsp;&nbsp;The connection handle reference<br />
&nbsp;&nbsp;&nbsp;&nbsp;req.frame&nbsp;&nbsp;&nbsp;&nbsp;The details of the network frame<br />
&nbsp;&nbsp;&nbsp;&nbsp;req.session&nbsp;&nbsp;The session store for that connection<br />
&nbsp;&nbsp;*/</span><br />});
<br />
<br />

&nbsp;<span className="highlight-4">// Broadcast to all connections subscribed to the channel 'user.join'</span>
<br />
&nbsp;<span>{'server.'}</span><span className="highlight-3">broadcast</span>{'(\'user.join\', { foo: \'bar\' });'}<br />});
          			</code>
							</pre>
						</div>

						<div className="col-md-6 text-center">
							<h4 className="description-btn">Setting up your server</h4>
							<button type="button" className="btn btn-default btn-doc mb-5">Documentation</button>
						</div>
					</div>
				</div>

				<div className="container pt-5">
					<div className="row">
						<div className="col-md-6 text-center">
							<h4 className="description-btn">Setting up your server</h4>
							<button type="button" className="btn btn-default btn-doc mb-5">Documentation</button>
						</div>

						<div className="col-md-6">
							<pre className="well">
								<code>
									<span className="highlight-1">{'import'}</span> <span className="">{'Kalm'}</span><span className="highlight-1"> from </span>{'\'kalm\';'}
									<br />
									<br />
									<span className="highlight-4">// Opens a connection to the server</span>
									<br />
									<span className="highlight-4">// Port, transport and serial settings should match</span>
									<br />
									<span className="highlight-1">{'const'}</span> <span className="highlight-2">{'client'}</span><span className="highlight-1"> = </span>{' Kalm.'}<span className="highlight-3">{'connect'}</span>{'({ '}{`
  hostname`}<span className="highlight-1">: </span><span className="highlight-2">{'\'0.0.0.0\''}</span>,<span className="highlight-4"> // Server's IP</span><br />
	&nbsp;&nbsp;port<span className="highlight-1">: </span><span className="highlight-2">{'6000'}</span>,<span className="highlight-4"> // Server's port</span>
	<br />
});
<br />
<br />

&nbsp;<span className="highlight-4">// Broadcast to all connections subscribed to the channel 'user.join'</span>
<br />
&nbsp;<span>{'server.'}</span><span className="highlight-3">broadcast</span>{'(\'user.join\', { foo: \'bar\' });'}<br />});
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