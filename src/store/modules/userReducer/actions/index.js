import types from './types';

export function actionAddUserRequest(param) {
	console.log('02. Action Request');
	return {
		type: types.ADD_USER_REQUEST,
		txt: param,
	};
}

export function actionAddUserSuccess(txt) {
	console.log('04. Action Success');
	return {
		type: types.ADD_USER_SUCCESS,
		txt: txt,
	};
}

//------------------------------------------

export function actionAddDecrementRequest() {
	console.log('02. Action Request');
	return {
		type: 'ADD_DECREMENT_REQUEST',
	};
}

export function actionAddDecrementSuccess() {
	console.log('04. Action Success');
	return {
		type: 'ADD_DECREMENT_SUCCESS',
	};
}
