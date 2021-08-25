import { Route } from 'react-router-dom';

export default function MyRoute({ component: Component, isPrivate, ...rest }) {
	// Usei essa configuração caso precisasse de rotas privadas! :)
	return <Route {...rest} render={(props) => <Component {...props} />} />;
}
