import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import AllRoutes from './routes';
import myHistory from './services/history';
import store, { persistor } from './store';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router history={myHistory}>
					<GlobalStyle />
					<ToastContainer autoClose={3000} className='toast-container' />
					<AllRoutes />
				</Router>
			</PersistGate>
		</Provider>
	);
}

export default App;
