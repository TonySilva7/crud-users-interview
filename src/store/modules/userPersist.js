import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userPersist = (reducers) => {
	const persistedReducers = persistReducer(
		{
			key: 'USERS',
			storage,
			whitelist: ['userReducer'],
		},
		reducers
	);

	return persistedReducers;
};

export default userPersist;
