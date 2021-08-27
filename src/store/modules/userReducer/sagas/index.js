import { toast } from 'react-toastify';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../../services/api';
import history from '../../../../services/history';
import {
	actionAddUserSuccess,
	actionDeleteUserSuccess,
	actionLoginSuccess,
	actionUpdateUserSuccess,
	changeLoading,
} from '../actions';
import types from '../actions/types';

function* sagaLoginUser({ usr, pass }) {
	try {
		yield put(changeLoading(true));
		const response = yield call(() =>
			api.post('/auth', {
				username: usr,
				password: pass,
			})
		);

		const myToken = response.data.token;
		yield put(actionLoginSuccess(myToken, usr));
		yield put(changeLoading(false));

		history.push('/dashboard');
	} catch (error) {
		yield put(changeLoading(false));
		toast.error('Credenciais Inválidas');
	}
}

function* sagaAddUser({ name, username, email, password }) {
	try {
		yield put(changeLoading(true));
		const response = yield call(() =>
			api.post('/users', {
				name,
				username,
				email,
				password,
			})
		);

		const message = response.data.message;
		yield put(actionAddUserSuccess(message));
		toast.success(message);

		yield put(changeLoading(false));
	} catch (error) {
		toast.error('Desculpe, algo deu errado. Tente novamente!');
		yield put(changeLoading(false));
	}
}

function* sagaUpdateUser({ id, name, username, email, password }) {
	try {
		yield put(changeLoading(true)); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

		const response = yield call(() =>
			api.put(`users/${id}`, {
				name,
				username,
				email,
				password,
			})
		);

		const message = response.data.message;

		yield put(actionUpdateUserSuccess(message));
		toast.success(message);

		yield put(changeLoading(false)); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	} catch (error) {
		toast.error('Desculpe! Tente novamente.');
		yield put(changeLoading(false)); // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	}
}

function* sagaDeleteUser({ id }) {
	try {
		yield put(changeLoading(true));
		toast.info('Processando solicitação...');

		const response = yield call(() => api.delete(`/users/${id}`));
		const message = response.data.message;
		yield put(actionDeleteUserSuccess(message));
		toast.success(message);

		yield put(changeLoading(false));
	} catch (error) {
		toast.error('Desculpe! Tente novamente.');
		yield put(changeLoading(false));
	}
}

export default all([
	takeLatest(types.LOGIN_REQUEST, sagaLoginUser),
	takeLatest(types.ADD_USER_REQUEST, sagaAddUser),
	takeLatest(types.UPDATE_USER_REQUEST, sagaUpdateUser),
	takeLatest(types.DELETE_USER_REQUEST, sagaDeleteUser),
]);
