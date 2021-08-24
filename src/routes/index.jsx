import { useSelector } from 'react-redux';
import { Redirect, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import MyRoute from './MyRoute';

export default function AllRoutes() {
	const loggedIn = !!useSelector((state) => state.userReducer.token);

	return (
		<Switch>
			<MyRoute exact path='/' component={SignIn} />
			<MyRoute exact path='/dashboard'>
				{loggedIn ? <Dashboard /> : <Redirect to='/' />}
			</MyRoute>
		</Switch>
	);
}
