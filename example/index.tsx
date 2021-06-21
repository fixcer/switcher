import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Switcher from '../dist';

const App = () => {
  const [active, setActive] = React.useState(false);

  const onStatusChange = checked => {
    setActive(checked);
  };

  return (
    <div>
      <Switcher
        id="active"
        name="active"
        checked={active}
        onChange={onStatusChange}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
