// ex6.7
import { useDispatch } from "react-redux"
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from "../services/anecdotes"

const AnecdotesForm = () => {
  const dispatch = useDispatch()

  // add new note ex6.13  and ex6.16
  const submitHandler = async e => {
    e.preventDefault()
    const inputValue = e.target.elements.anecdoteinput.value

    e.target.elements.anecdoteinput.value = ''

    dispatch(createNewAnecdote(inputValue))

  }

  return (
    <form onSubmit={submitHandler} >
      <div><input name="anecdoteinput" /></div>
      <button>create</button>
    </form>
  )
}


export default AnecdotesForm