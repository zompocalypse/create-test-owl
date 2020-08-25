import React from 'react';
import StageParticipants from './StageParticipants';
import store from './store';
import './Stage.css';

export default function Stage(props) {
  return (
    <section class="stage">
        <div class="active-view">
          {store.participants
          .filter(participant => participant.onStage === true)
          .map(participant =>
            <StageParticipants
              key={participant.id}
              name={participant.name}
              avatar={participant.avatar}
            />
          )}
        </div>
    </section>
  )
}