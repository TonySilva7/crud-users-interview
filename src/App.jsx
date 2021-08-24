import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AllRoutes from './routes';
import myHistory from './services/history';
import store from './store';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
	return (
		<Provider store={store}>
			<Router history={myHistory}>
				<GlobalStyle />
				<ToastContainer autoClose={3000} className='toast-container' />
				<AllRoutes />
			</Router>
		</Provider>
	);
}

export default App;
