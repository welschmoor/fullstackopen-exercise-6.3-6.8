
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const Notification = () => {
  const [notificationState, setNotificationState] = useState('')
  const notification = useSelector(state => state.notification)

  useEffect(() => {
    let unsub = false

    if (!unsub) { setNotificationState(notification) }

    setTimeout(() => {
      setNotificationState('')
    }, 3000)

    return () => {
      unsub = true
    }
  }, [notification])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notificationState ? notificationState : <span>&nbsp;</span>}
    </div>
  )
}

export default Notification