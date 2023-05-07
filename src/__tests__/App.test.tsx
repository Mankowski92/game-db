import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import App from '../App';

test('renders ApiKeyInput component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

test('renders TopBar component', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const topBar = getByTestId('top-bar');
  expect(topBar).toBeInTheDocument();
});

// TODO extend basic tests configuration
