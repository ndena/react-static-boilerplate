import React from 'react'
import { Provider } from 'react-redux'

import routes from 'app/router/routes'

import createStore from 'app/store/create'
import reducers from 'app/store/reducers'

import { init } from './actions/app'

import { Router } from './components/routing'

export default config => {
  // Creating Redux Store
  const store = createStore({ reducers })
  store.dispatch(init({ config }))

  const element = (
    <Provider store={store}>
      <Router
      routes={routes}
      location={window.location}
      />
    </Provider>
  )

  return {
    element,
    store,
  }
}
