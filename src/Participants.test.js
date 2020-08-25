import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participants from './Participants';
import store from './store';

describe( 'Participant component' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participants />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(<Participants
        name={store.participants[0].name}
        avatar={store.participants[0].avatar}
        inSession={store.participants[0].inSession}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

})