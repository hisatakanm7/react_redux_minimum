import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'

import * as I from 'immutable';

const loggerMiddleware = createLogger({
        stateTransformer: state => {
            return state && I.fromJS(state).map(s => {
                    if (s === 'page') return s.toJS();
                    return s;
                }).toJS();
        },
    });

export default function configureStore(preloadedState) {
    return createStore(
        reducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}
