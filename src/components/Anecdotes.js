// ex 6.8

import { useSelector, useDispatch } from "react-redux"
import { voteDO } from "../reducers/anecdoteReducer"

const Anecdotes = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteDO(id))
  }

  // ex6.5, sorted by the num of votes:
  return (
    <ul>
      {
        anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )
      }
    </ul>
  )
}


export default Anecdotes