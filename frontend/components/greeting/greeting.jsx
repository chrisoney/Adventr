import React from 'react'
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  return props.currentUser ? (
    <div>
      <h2>Welcome, {props.currentUser.username}! </h2>
      <button onClick={props.logout}>Log Out</button>
    </div>
  ) : (
    <div className="full-page">

      <div className="entry-modal">
        <h1>Adventr</h1>
        <p>Come for the adventure</p>
        <p>Stay for the magical items</p>
        <div className="entry-buttons">
          <div className="sign-up">
            <Link to='/signup'>Get Started</Link>
          </div>
          <div className="log-in">
            <Link to='/login'>Log In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Greeting;