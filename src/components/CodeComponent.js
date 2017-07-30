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
			<div>
				<div className="container pt-5">
					<div className="row">
						<div className="col-md-6">
						<h4>Setting up your server</h4>
							<pre className="well">
								<code>
									<span className="highlight-1">{'const'}</span> <span className="highlight-2">{'Kalm'}</span>{' = '}<span className="highlight-1">{'require'}</span>{'(\'kalm\');'}
									<br />
									<span className="highlight-1">{'const'}</span> <span className="highlight-2">{'ws'}</span>{' = '}<span className="highlight-1">{'require'}</span>{'(\'kalm-websocket\');'}
									<br />
									<br />
									<span className="highlight-1">{'const'}</span> <span className="highlight-2">{'server'}</span>{' = Kalm.'}<span className="highlight-3">{'listen'}</span>{'({ '}{`
  port: `}<span className="highlight-1">{'3000'}</span>{`,
  transport: ws
});

server.on('connection', (client) => {
   client.subscribe('/', (data) => {
       console.log(data);  // 'Hello from Browser!'
   });
});
                `}</code>
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