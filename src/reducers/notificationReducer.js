// ex6.10

const notificationReducer = (state = 'notification goes here', action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    default:
      return state
  }
}

export const notificationChange = notification => {
  return {
    type: 'SET_NOTIFICATION',
    notification: notification,
  }
}

export default notificationReducer