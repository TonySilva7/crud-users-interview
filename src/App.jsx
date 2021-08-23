import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import AllRoutes from './routes';
import myHistory from './services/history';
import store from './store';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
	return (
		<Provider store={store}>
			<Router history={myHistory}>
				<AllRoutes />
				<GlobalStyle />
			</Router>
		</Provider>
	);
}

export default App;
