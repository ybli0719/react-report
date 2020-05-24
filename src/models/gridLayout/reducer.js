import * as TYPES from '@/models/types'

const defaultState = {

}

export default function gridLayoutReducer(state = defaultState, action) {
  const { type, payload } = action
  switch (type) {
    case TYPES.GRIDLAYOUT_DATA:
      return { ...state, data: payload }

    default:
      return state
  }
}
