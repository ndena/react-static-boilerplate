import { INIT } from '../actions/app'

export const initial = {

}

export default (state = initial, action) => {
  switch (action.type) {
    case INIT:
      return { ...state, ...action.config }
    default:
      return state
  }
}
