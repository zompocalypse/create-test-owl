import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StageParticipants from './StageParticipants';
import store from './store';

describe( 'StageParticipant component' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StageParticipants />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(<StageParticipants
        name={store.participants[0].name}
        avatar={store.participants[0].avatar}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

})