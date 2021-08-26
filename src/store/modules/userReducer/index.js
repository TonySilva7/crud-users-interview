import produce from 'immer';
import types from './actions/types';

const initialState = {
	token: '',
	message: '',
	isLoading: false,
	user: {
		id: '',
		// name: '',
		username: '',
		// email: '',
		// password: '',
	},
};

export default function myReducer(state = initialState, action) {
	switch (action.type) {
		case types.CHANGE_LOADING:
			return produce(state, (draft) => {
				draft.isLoading = action.isLoading;
				console.log('LOADING: ', draft.isLoading);
			});

		case types.LOGIN_SUCCESS:
			return produce(state, (draft) => {
				draft.token = action.token;
				draft.user.username = action.username;
			});

		case types.LOGOUT_SUCCESS:
			return produce(state, (draft) => {
				draft.token = action.token;
				draft.user.username = action.username;
			});

		case types.ADD_USER_SUCCESS:
			return produce(state, (draft) => {
				draft.message = action.message;
			});

		case types.UPDATE_USER_SUCCESS:
			return produce(state, (draft) => {
				draft.message = action.message;
			});

		case types.DELETE_USER_SUCCESS:
			return produce(state, (draft) => {
				draft.message = action.message;
			});

		default:
			return state;
	}
}
