import produce from 'immer';
import types from './actions/types';

const initialState = {
	token: '',
	message: '',
	isLoading: false,
	user: {
		id: '',
		name: '',
		username: '',
		email: '',
		password: '',
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
			});

		case types.ADD_USER_SUCCESS:
			return produce(state, (draft) => {
				draft.message = action.message;
				alert(draft.message);
			});

		// case 'ADD_DECREMENT_SUCCESS':
		// 	console.log('05. Reducer: ', action);
		// 	return produce(state, (draft) => {
		// 		console.log('05. DRAFT: ', draft.value, draft.token);
		// 		draft.token = action.token;
		// 		draft.value = state.value - 1;
		// 	});

		default:
			return state;
	}
}
