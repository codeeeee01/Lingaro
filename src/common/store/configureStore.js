import {compose, createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import rootSaga from '../redux/sagas';
import allReducers from '../redux';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  stateReconciler: autoMergeLevel2,
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(sagaMiddleware)),
);

const persistor = persistStore(store, {debounce: 500});
persistor.flush();
sagaMiddleware.run(rootSaga);

export {store, persistor};
