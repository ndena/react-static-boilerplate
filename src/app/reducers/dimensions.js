import { UPDATE_DIMENSIONS } from 'app/actions/dimensions'
import {
  MOBILE_SCREEN,
  SMALL_SCREEN,
  MEDIUM_SCREEN,
  LARGE_SCREEN,
} from 'app/constants/Dimensions'

const init = {
  width: window.screen.width,
  height: window.screen.height,
}

const getScreenType = width => {
  if (width < 744) {
    return MOBILE_SCREEN
  }

  if (width < 1075) {
    return SMALL_SCREEN
  }

  if (width < 1128) {
    return MEDIUM_SCREEN
  }

  return LARGE_SCREEN
}

export default (state = init, action) => {
  switch (action.type) {
    case UPDATE_DIMENSIONS: {
      const documentElement = document.documentElement
      const body = document.getElementsByTagName('body')[0]
      const width = window.innerWidth || documentElement.clientWidth || body.clientWidth
      const height = window.innerHeight || documentElement.clientHeight || body.clientHeight
      return {
        width,
        height,
        type: getScreenType(width),
      }
    }
    default:
      return {
        ...state,
      }
  }
}
