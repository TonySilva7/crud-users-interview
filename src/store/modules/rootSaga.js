import { all } from 'redux-saga/effects';
import sagas from './userReducer/sagas';

export default function* rootSaga() {
	return yield all([sagas]);
}
