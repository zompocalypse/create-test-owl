import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from './Stage';
import store from './store';

describe( 'Stage component' , () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI as expected', () => {
    const tree = renderer
      .create(<Stage
        {...store.participants}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

})