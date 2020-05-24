import { combineReducers } from 'redux'
import { takeEvery } from 'redux-saga/effects'
import gridLayout from './gridLayout/reducer'
import { fetchGridLayoutData } from './gridLayout/saga'

export const rootReducer = combineReducers({
  gridLayout
})

export function* rootSaga() {
  yield takeEvery('fetchGridLayoutData', fetchGridLayoutData)
}
