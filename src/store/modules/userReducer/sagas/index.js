import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../../services/api';
import { actionAddDecrementSuccess, actionAddUserSuccess } from '../actions';
import types from '../actions/types';

async function kkk() {
	//...
}

function* sagaLoginUser({ usr, pass }) {
	console.log('03. Saga');

	try {
		const response = yield call(() =>
			api.post('/auth', {
				username: usr,
				password: pass,
			})
		);

		const myToken = response.data.token;
		// yield put(actionLoginSuccess(myToken));

		alert(myToken);
	} catch (error) {
		//LANÇAR ERRO AQUI
		console.log(error);
		alert(`Erro: ${error}`);
	}
}

function* sagaAddUser({ txt }) {
	console.log('03. Saga');
	const myTxt = txt + ' World!!!';

	yield put(actionAddUserSuccess(myTxt));
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
