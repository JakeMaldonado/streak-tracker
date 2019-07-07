import { createStore, combineReducers } from 'redux'
import streaksReducer from '../reducers/streaks'

const store = createStore(combineReducers({
  streaks: streaksReducer,
}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
