import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { loginReducer, maskReducer, fetchDataReducer } from '@/reducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '@/sagas'

const rootReducer = combineReducers({
  loginReducer,
  maskReducer,
  fetchDataReducer
})
// const store = createStore(rootReducer)

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

export default store
