import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/dashboard';
import MyRoute from './MyRoute';

export default function AllRoutes() {
	return (
		<Switch>
			<MyRoute exact path='/dashboard' component={Dashboard} isPrivate />
		</Switch>
	);
}
