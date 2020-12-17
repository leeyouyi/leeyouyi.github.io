import { all } from 'redux-saga/effects'
import { mySaga } from '@/action'

function * rootSaga () {
  yield all([mySaga()])
}

export default rootSaga
