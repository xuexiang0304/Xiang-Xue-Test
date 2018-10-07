import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {rootReducer} from './reducers/rootReducer'

const loggerMiddleware = createLogger()

let middleware = [thunkMiddleware]
if(process.env.NODE_ENV !== 'production'){
	middleware = [...middleware, loggerMiddleware]
}

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      ...middleware
    )
  )
}
