import {
	createStore,
	applyMiddleware
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import Reducers from './reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
	name: 'Prometheus Core'
});
export default createStore(
	Reducers,
	composeEnhancers(
		applyMiddleware(sagaMiddleware)
	)
);

sagaMiddleware.run(sagas);
