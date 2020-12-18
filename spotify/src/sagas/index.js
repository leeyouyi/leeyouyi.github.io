import { all } from 'redux-saga/effects'
import { mySaga } from '@/action'
// import { more } from '@/action'

function * rootSaga () {
  yield all([
    mySaga()
    // ,more()
  ])
}

export default rootSaga
