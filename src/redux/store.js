// exercise 6.9
import { createStore, combineReducers } from 'redux'
import anecdotsReducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

// trimple reducer and ex 6.12
const reducer = combineReducers({ anecdotes: anecdotsReducer, notification: notificationReducer, filter: filterReducer })

const store = createStore(
  reducer,
  composeWithDevTools()
)

export default store