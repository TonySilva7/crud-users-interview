import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export default function MyRoute({ component: Component, isPrivate, ...rest }) {
	// const loading = false;
	const isLoading = useSelector((state) => state.userReducer.isLoading);
	const myToken = useSelector((state) => state.userReducer.token);
	console.log(myToken.length);

	if (isLoading) {
		return (
			<div>
				<h1>Carregando...</h1>
			</div>
		);
	}

	if (myToken.length === 0) {
		return <Redirect to='/' />;
	}

	// if (myToken !== '') {
	// 	return <Redirect to='/dashboard' />;
	// }

	return <Route {...rest} render={(props) => <Component {...props} />} />;
}
