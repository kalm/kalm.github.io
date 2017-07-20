/**
 * Bootstrap
 * - Setups the routing for the different pages
 * - Links the root component
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno';

import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Wrapper from './Wrapper';
import LandingPage from './pages/LandingPage';
import Docs from './pages/Docs';
import GettingStarted from './pages/GettingStarted';
import NoMatch from './pages/NoMatch';

/* Local variables -----------------------------------------------------------*/

const browserHistory = createBrowserHistory();

const routes = (
	<Router history={ browserHistory }>
		<Route component={ Wrapper }>
			<Route path="/" component={ LandingPage } />
			<Route path="/docs" component={ Docs } />
			<Route path="/getting-started" component={ GettingStarted } />
			<Route path="*" component={ NoMatch }/>
		</Route>
	</Router>
);

/* Init ----------------------------------------------------------------------*/

Inferno.render(routes, document.getElementById('app'));

