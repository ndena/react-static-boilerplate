import {
  compose,
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux'
import thunk from 'redux-thunk'

export default ({ reducers, state = {} }) => {
  const middleware = applyMiddleware(
    thunk,
  )

  const enhancers = [
    middleware,
  ]

  if (typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension())
  }

  const reducer = combineReducers({
    ...reducers,
  })

  return createStore(
    reducer,
    state,
    compose(
      ...enhancers,
    ),
  )
}
