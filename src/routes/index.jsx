import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import MyRoute from './MyRoute';

export default function AllRoutes() {
	return (
		<Switch>
			<Route exact path='/' component={SignIn} />
			<MyRoute exact path='/dashboard' component={Dashboard} />
		</Switch>
	);
}
