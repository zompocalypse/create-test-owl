import React from 'react';
import './ParticipantList.css'
import Participants from './Participants'
import store from './store'

export default function ParticipantList(props) {
  return (
    <div className="participants">
      {store.participants
      .sort((a, b) => {
        if(a.inSession < b.inSession) {
          return 1;
        }
        if(a.inSession > b.inSession) {
          return -1;
        }
      })
      .map((participant) =>
        <Participants
          key={participant.id}
          name={participant.name}
          avatar={participant.avatar}
          inSession={participant.inSession}
        />
      )
    }
    </div>
  )
}