import { combineReducers } from 'redux'
import {searchHotels} from './searchReducer.js'

export const appReducer = combineReducers({
  searchHotels
})

export const rootReducer = (state, action) => {
  return appReducer(state, action)
}
