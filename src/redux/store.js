// exercise 6.9
import { createStore, combineReducers, applyMiddleware } from 'redux'
import anecdotsReducer from '../reducers/anecdoteReducer'
import notificationReducer from '../reducers/notificationReducer'
import filterReducer from '../reducers/filterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// trimple reducer and ex 6.12
const reducer = combineReducers({ anecdotes: anecdotsReducer, notification: notificationReducer, filter: filterReducer })

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store