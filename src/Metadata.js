import React from 'react'

const now = new Date()
const Metadata = ({ message }) => {

  function getTime(){
    let currTime = message.id
    currTime = new Date(message.id)
    currTime = currTime.getMonth()+1 + '/' + currTime.getDate() + '/' + (currTime.getYear()-100) + ',  ' + currTime.getHours() + ':' + currTime.getMinutes()
    return currTime;
  }
  return (
    <div className="Metadata" style={styles.data}>
      <div className="user" style={styles.user}>
        {message.user.displayName}
      </div>
      <div className="time" style={styles.time}>
        {getTime()}
      </div>
    </div>
  )
}

const styles = {
  data: {
    display: 'flex',
    alignItems: 'baseline',
  },

  user: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },

  time: {
    color: '#999',
    fontSize: '0.8rem',
  }
}

export default Metadata