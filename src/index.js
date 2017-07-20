// inferno module
import Inferno from 'inferno';


// routing modules
import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

// app components
import MyApp from './MyApp';
import LandingPageComponent from './LandingPageComponent';

const browserHistory = createBrowserHistory();

const routes = (
	<Router history={ browserHistory }>
		<Route component={ MyApp }>
			<Route path="/" component={ LandingPageComponent } />
		</Route>
	</Router>
);

Inferno.render(routes, document.getElementById('app'));

