import Mobile from 'app/components/layout/Mobile'
import Static from 'app/components/layout/Static'

import Home from 'app/components/page/Home'
import NotFound from 'app/components/page/NotFound'

import {
  MOBILE_SCREEN, SMALL_SCREEN, MEDIUM_SCREEN, LARGE_SCREEN,
} from 'app/constants/Dimensions'

const getStaticLayout = type => {
  switch (type) {
    case MOBILE_SCREEN:
      return Mobile
    case SMALL_SCREEN:
    case MEDIUM_SCREEN:
    case LARGE_SCREEN:
    default:
      return Static
  }
}

export default [
  {
    path: '/',
    component: Home,
    layout: type => getStaticLayout(type),
  },
  {
    path: '*',
    status: 404,
    component: NotFound,
  },
]
