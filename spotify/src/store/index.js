import { createStore, combineReducers } from 'redux'
import { loginReducer, maskReducer } from '@/reducer'

const rootReducer = combineReducers({
  loginReducer,
  maskReducer
})

const store = createStore(rootReducer)

export default store
