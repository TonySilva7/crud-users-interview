import produce from 'immer';
import types from './actions/types';

export default function myReducer(state = { value: 0, txt: '' }, action) {
	switch (action.type) {
		case types.ADD_USER_SUCCESS:
			return produce(state, (draft) => {
				console.log('05. DRAFT: ', draft.value, draft.txt);
				draft.txt = action.txt;
				draft.value = state.value + 1;
			});

		case 'ADD_DECREMENT_SUCCESS':
			console.log('05. Reducer: ', action);
			return produce(state, (draft) => {
				console.log('05. DRAFT: ', draft.value, draft.txt);
				draft.txt = action.txt;
				draft.value = state.value - 1;
			});

		default:
			return state;
	}
}
