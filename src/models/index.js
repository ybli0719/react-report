import { combineReducers } from 'redux'
import { takeEvery } from 'redux-saga/effects'
import gridLayout from './GridLayout/reducer'
import { fetchGridLayoutData } from './GridLayout/saga'

export const rootReducer = combineReducers({
  gridLayout
})

export function* rootSaga() {
  yield takeEvery('fetchGridLayoutData', fetchGridLayoutData)
}
