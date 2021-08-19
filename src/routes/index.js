import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import MyRoute from './MyRoute';

export default function AllRoutes() {
	return (
		<Switch>
			<MyRoute exact path='/dashboard' component={Dashboard} isPrivate />
		</Switch>
	);
}
