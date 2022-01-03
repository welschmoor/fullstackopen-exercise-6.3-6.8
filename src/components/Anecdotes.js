// ex 6.8

import { useSelector, useDispatch } from "react-redux"
import { voteDO } from "../reducers/anecdoteReducer"
import { notificationChange } from "../reducers/notificationReducer"
import { filterReducer } from "../reducers/filterReducer"
import anecdoteService from "../services/anecdotes"

const Anecdotes = () => {
  const anecdotes = useSelector(state => {
    console.log("state.filter", state.filter)
    if (state.filter === '') {
      return state.anecdotes  // this only works after we use combineReducers
    } else {
      // ex 6.12
      return state.anecdotes.filter(e => e.content.toLowerCase().includes(state.filter))
    }
  })


  const dispatch = useDispatch()

  // ex6.11
  const vote = (anecdote) => {
    dispatch(notificationChange(""))

    // ex 6.17
    dispatch(voteDO(anecdote))

    // anecdoteService.updateVotes(anecdote)
    setTimeout(() => {
      dispatch(notificationChange(`you voted on: "${anecdotes.find(e => e.id === anecdote.id).content}"`))
    }, 0)
  }


  return (
    <ul>
      {
        anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote => // ex6.5, sorted by the num of votes: .sort((a, b) => b.votes - a.votes)
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        )
      }
    </ul>
  )
}


export default Anecdotes