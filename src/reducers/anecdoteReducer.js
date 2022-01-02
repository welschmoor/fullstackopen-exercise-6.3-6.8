// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

export const getId = () => (100000 * Math.random()).toFixed(0)

// this turns an array of strings into array of objects
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}


// action creators  ex6.6
export const createNewAnecdote = function (newAnecdote) {
  console.log("newAnec:::", newAnecdote)
  return { type: 'ADD_NEW', data: newAnecdote }
}

export const voteDO = id => {
  return { type: "VOTE", data: { id: id } }
}



// const initialState = {
//   anecdotes: anecdotesAtStart.map(asObject),
//   notification: 'THIS IS NOTIFICATION',
//   filter: 'opt',
// }

const anecdotsReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action.type)

  if (action.type === 'VOTE') {
    const anecdoteInQ = state.find(e => e.id === action.data.id)

    return [...state.filter(e => e.id !== action.data.id), { ...anecdoteInQ, votes: anecdoteInQ.votes + 1 }]
  } else if (action.type === "ADD_NEW") {
    return [...state, action.data] // change name
  } else if (action.type === 'INIT_ANECDOTES') {
    return action.data
  }
  return state
}

export const initializeAnecdotes = (notes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: notes,
  }
}


export default anecdotsReducer