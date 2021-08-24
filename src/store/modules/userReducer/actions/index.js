import types from './types';

export function changeLoading(bool) {
	return {
		type: types.CHANGE_LOADING,
		isLoading: bool,
	};
}

// ........... LOGIN .........................
export function actionLoginRequest(usr, pass) {
	console.log('02. Action Request');
	return {
		type: types.LOGIN_REQUEST,
		usr,
		pass,
	};
}

export function actionLoginSuccess(token) {
	console.log('02. Action Request');
	return {
		type: types.LOGIN_SUCCESS,
		token,
	};
}

// ........... ADD USER .....................
export function actionAddUserRequest(name, username, email, password) {
	return {
		type: types.ADD_USER_REQUEST,
		name,
		username,
		email,
		password,
	};
}

export function actionAddUserSuccess(message) {
	console.log('04. Action Success');
	return {
		type: types.ADD_USER_SUCCESS,
		message,
	};
}

// ........... DELETE USER .....................
export function actionDeleteUserRequest(id) {
	return {
		type: types.DELETE_USER_REQUEST,
		id,
	};
}

export function actionDeleteUserSuccess(message) {
	return {
		type: types.DELETE_USER_SUCCESS,
		message,
	};
}
