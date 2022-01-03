//anecdoteService

import axios from "axios"

const baseURL = 'http://localhost:3006/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

const create = async newPost => {
  const newAnecdote = {
    content: newPost,
    votes: 0,
  }
  const response = await axios.post(baseURL, newAnecdote)
  return response.data
}

const updateVotes = async post => {
  const updatedAnecdote = {
    id: post.id,
    content: post.content,
    votes: post.votes + 1,
  }
  const response = await axios.put(`${baseURL}/${post.id}`, updatedAnecdote)
  return response.data
}


const anecdoteService = { getAll, create, updateVotes }
export default anecdoteService