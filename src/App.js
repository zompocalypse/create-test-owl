import React, { Component } from 'react';
import Stage from './Stage';
import ChatParticipants from './ChatPariticpants';
import store from './store';

class App extends Component() {
  static defaultProps = {
    store: {
      participants: [],
      chatEvents: []
    }
  }

  render () {
    const { store } = this.props;
    return
      <main className='App'>
        <div className="session">
          <section class="chat-and-participants">
            <ChatParticipants />
          </section>
          <section className="stage">
            <Stage />
          </section>
          <section className="control-bar">
            
          </section>
        </div>
    </main>
  }

export default App;