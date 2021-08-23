import { all, put, takeLatest } from 'redux-saga/effects';
import { actionAddDecrementSuccess, actionAddUserSuccess } from '../actions';
import types from '../actions/types';

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
	takeLatest(types.ADD_USER_REQUEST, sagaAddUser),
	takeLatest('ADD_DECREMENT_REQUEST', sagaAddDecrement),
]);
