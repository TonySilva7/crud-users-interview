import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../../services/api';
import history from '../../../../services/history';
import {
	actionAddDecrementSuccess,
	actionAddUserSuccess,
	actionLoginSuccess,
	changeLoading,
} from '../actions';
import types from '../actions/types';

function* sagaLoginUser({ usr, pass }) {
	console.log('03. Saga');
	console.log('...Começou o acesso...');

	try {
		yield put(changeLoading(true)); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		const response = yield call(() =>
			api.post('/auth', {
				username: usr,
				password: pass,
			})
		);

		const myToken = response.data.token;
		yield put(actionLoginSuccess(myToken));
		yield put(changeLoading(false)); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		history.push('/dashboard');

		console.log('...Terminou o acesso...');
		alert(myToken);
	} catch (error) {
		//LANÇAR ERRO AQUI
		console.log(error);
		yield put(changeLoading(false)); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		alert(`Erro: ${error}`);
	}
}

function* sagaAddUser({ name, username, email, password }) {
	console.log('03. SAGA - Add Request:', name, username, email, password);

	try {
		const response = yield call(() =>
			api.post('users', {
				name,
				username,
				email,
				password,
			})
		);

		const message = response.data.message;
		yield put(actionAddUserSuccess(message));

		alert(message);
	} catch (error) {
		//LANÇAR ERRO AQUI
		console.log(error);
		alert(`Erro: ${error}`);
	}
}

function* sagaAddDecrement() {
	console.log('03. Saga');

	yield put(actionAddDecrementSuccess());
}

export default all([
	takeLatest(types.LOGIN_REQUEST, sagaLoginUser),
	takeLatest(types.ADD_USER_REQUEST, sagaAddUser),
	takeLatest('ADD_DECREMENT_REQUEST', sagaAddDecrement),
]);
