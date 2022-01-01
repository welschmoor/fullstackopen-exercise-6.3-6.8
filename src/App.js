import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Anecdotes from "./components/Anecdotes"

import AnecdotesForm from './components/AnecdotesForm'


const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()


  return (
    <div>
      <h2>Anecdotes</h2>
      <Anecdotes />

      <h2>create new</h2>
      <AnecdotesForm />
    </div>
  )
}

export default App