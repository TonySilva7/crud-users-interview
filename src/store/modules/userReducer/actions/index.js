import types from './types';

export function changeLoading(bool) {
	return {
		type: types.CHANGE_LOADING,
		isLoading: bool,
	};
}

// ........... LOGIN .........................
export function actionLoginRequest(usr, pass) {
	return {
		type: types.LOGIN_REQUEST,
		usr,
		pass,
	};
}

export function actionLoginSuccess(token, usr) {
	return {
		type: types.LOGIN_SUCCESS,
		token,
		username: usr,
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
	return {
		type: types.ADD_USER_SUCCESS,
		message,
	};
}

// ........... UPDATE USER .....................
export function actionUpdateUserRequest(id, name, username, email, password) {
	return {
		type: types.UPDATE_USER_REQUEST,
		id,
		name,
		username,
		email,
		password,
	};
}

export function actionUpdateUserSuccess(message) {
	return {
		type: types.UPDATE_USER_SUCCESS,
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
