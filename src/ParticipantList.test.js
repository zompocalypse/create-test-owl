import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './ParticipantList';
import store from './store';

describe( 'Participant component' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ParticipantList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(<ParticipantList
        {...store.participants}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

})