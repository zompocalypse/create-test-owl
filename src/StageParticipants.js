import React from 'react';
import './StageParticipants.css'

export default function StageParticipants(props) {
  return (
    <div className="onStageParticipants">
        <img src={props.avatar} alt={props.name}/>
        <div className="stageDetails">
          <span className="contact-on-stage-details-text">
          {props.name}
          </span>
          <div className="mute">mute</div>
          <div className="search">search</div>
        </div>
    </div>
  )
}