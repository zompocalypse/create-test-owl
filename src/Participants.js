import React from 'react';
import './participants.css'

export default function Participants(props) {
  return (
    <div className="participants">
      <div className="session-participant">
        <img src={props.avatar} alt={props.name}/>
        <div className="participant-details">
          <h6>{props.name}</h6>
          <div className="status">
          {props.inSession}
          </div>  
        </div>
      </div>
    </div>
  )
}
