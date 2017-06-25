import React from 'react';
import ReactDOM from 'react-dom';
import TextBox from './TextBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextBox />, div);
});
