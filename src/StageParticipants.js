import React from 'react';
import './StageParticipants.css'

export default function StageParticipants(props) {
  return (
    <div class="onStageParticipants">
        <img src={props.avatar} alt={props.name}/>
        <div class="stageDetails">
          <span class="contact-on-stage-details-text">
          {props.name}
          </span>
          <div class="mute">mute</div>
          <div class="search">search</div>
        </div>
    </div>
  )
}