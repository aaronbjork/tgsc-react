import React from 'react';
import ReactDOM from 'react-dom';
import App from './Scorecard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Scorecard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
