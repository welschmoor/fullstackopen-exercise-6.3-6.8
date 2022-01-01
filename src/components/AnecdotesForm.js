// ex6.7
import { useDispatch } from "react-redux"
import { getId, createNewAnecdote } from '../reducers/anecdoteReducer'


const AnecdotesForm = () => {
  const dispatch = useDispatch()

  // add new note
  const submitHandler = e => {
    e.preventDefault()
    const inputValue = e.target.elements.anecdoteinput.value

    dispatch(createNewAnecdote(inputValue))
    e.target.elements.anecdoteinput.value = ''
  }

  return (
    <form onSubmit={submitHandler} >
      <div><input name="anecdoteinput" /></div>
      <button>create</button>
    </form>
  )
}


export default AnecdotesForm