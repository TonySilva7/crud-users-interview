import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../../services/api';
import history from '../../../../services/history';
import {
	actionAddUserSuccess,
	actionDeleteUserSuccess,
	actionLoginSuccess,
	changeLoading,
} from '../actions';
import types from '../actions/types';

function* sagaLoginUser({ usr, pass }) {
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

		alert(myToken);
	} catch (error) {
		//LANÇAR ERRO AQUI

		yield put(changeLoading(false)); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
		alert(`Erro: ${error}`);
	}
}

function* sagaAddUser({ name, username, email, password }) {
	try {
		yield put(changeLoading(true));
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
		yield put(changeLoading(false));
		alert(message);
	} catch (error) {
		//LANÇAR ERRO AQUI

		yield put(changeLoading(false));
		alert(`Erro: ${error}`);
	}
}

function* sagaDeleteUser({ id }) {
	try {
		yield put(changeLoading(true));

		const response = yield call(() => api.delete(`users/${id}`));

		const message = response.data.message;
		yield put(actionDeleteUserSuccess(message));
		yield put(changeLoading(false));
		alert(message);
	} catch (error) {
		//LANÇAR ERRO AQUI
		yield put(changeLoading(false));
		alert(`Erro: ${error}`);
	}
}

export default all([
	takeLatest(types.LOGIN_REQUEST, sagaLoginUser),
	takeLatest(types.ADD_USER_REQUEST, sagaAddUser),
	takeLatest(types.DELETE_USER_REQUEST, sagaDeleteUser),
]);
