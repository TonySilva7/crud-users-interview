import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function MyRoute({ component: Component, ...rest }) {
	const isLoggedIn = !!useSelector((state) => state.userReducer.token);

	return (
		<Route
			{...rest}
			render={(props) =>
				isLoggedIn ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)
			}
		/>
	);
}
