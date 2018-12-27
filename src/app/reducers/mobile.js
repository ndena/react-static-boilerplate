import {
  TOGGLE_DRAWER,
} from 'app/actions/mobile'

const init = {
  drawerIsOpen: false,
}

export default (state = init, action) => {
  const { type, payload } = action

  switch (type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawerIsOpen: payload === undefined ? !state.drawerIsOpen : payload,
      }
    default:
      return state
  }
}
