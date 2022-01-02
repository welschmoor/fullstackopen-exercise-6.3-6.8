import React, { useEffect } from 'react'
import anecdoteService from "./services/anecdotes"
import { useDispatch } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

import Anecdotes from "./components/Anecdotes"
import AnecdotesForm from './components/AnecdotesForm'
import Notification from "./components/Notification"
import Filter from "./components/Filter"


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteService.getAll().then(res => {
      dispatch(initializeAnecdotes(res))
    })
  }, [dispatch])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <Filter />
      <Anecdotes />

      <h2>create new</h2>
      <AnecdotesForm />
    </div>
  )
}


export default App