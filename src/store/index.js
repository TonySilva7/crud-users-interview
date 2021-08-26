import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
import userPersist from './modules/userPersist';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(userPersist(rootReducer), enhancer);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
