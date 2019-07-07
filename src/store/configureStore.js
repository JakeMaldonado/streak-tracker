import { createStore, combineReducers } from 'redux'
import streaksReducer from '../reducers/streaks'

const store = createStore(combineReducers({
  streaks: streaksReducer,
}))

export default store
