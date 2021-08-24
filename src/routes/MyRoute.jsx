import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

export default function MyRoute({ component: Component, isPrivate, ...rest }) {
	const isLoading = useSelector((state) => state.userReducer.isLoading);

	if (isLoading) {
		return (
			<div>
				<h1>Carregando...</h1>
			</div>
		);
	}

	return <Route {...rest} render={(props) => <Component {...props} />} />;
}
