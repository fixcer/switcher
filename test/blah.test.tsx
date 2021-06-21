import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Switcher from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Switcher
        id="active"
        name="active"
        checked={false}
        onChange={() => {}}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
