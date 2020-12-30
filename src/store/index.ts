import createStore from './createStore';
import rootReducers from './modules/rootReducers';
import rootSaga from './modules/rootSaga';
import createSagaMiddleware from 'redux-saga';
import { Middleware } from 'redux';

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

const store = createStore(rootReducers, middlewares);

sagaMiddleware.run(rootSaga);

export { store };
