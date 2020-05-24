import createSagaMiddleware from 'redux-saga'
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import { rootReducer, rootSaga } from './models'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.({}) ?? compose

const enhancer = composeEnhancer(applyMiddleware(sagaMiddleware))

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store
