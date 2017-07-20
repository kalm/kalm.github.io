/**
 * Header component
 * - Displays site header
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno';
import Component from 'inferno-component';


/* Local variables -----------------------------------------------------------*/


/* Component -----------------------------------------------------------------*/

class CodeComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h4>Setting up your server</h4>

              <pre class="well">
                <code>
                <span class="highlight-1">{`const`}</span> <span class="highlight-2">{`Kalm`}</span>{` = `}<span class="highlight-1">{`require`}</span>{`('kalm');`}
                <br />
                <span class="highlight-1">{`const`}</span> <span class="highlight-2">{`ws`}</span>{` = `}<span class="highlight-1">{`require`}</span>{`('kalm-websocket');`}
                <br />
                <br />
                <span class="highlight-1">{`const`}</span> <span class="highlight-2">{`server`}</span>{` = Kalm.`}<span class="highlight-3">{`listen`}</span>{`({ `}{`
  port: `}<span class="highlight-1">{`3000`}</span>{`,
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