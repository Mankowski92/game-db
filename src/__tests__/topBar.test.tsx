import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import TopBar from '../components/topBar/topBar';

test('renders ApiKeyInput component', () => {
  render(
    <Provider store={store}>
      <TopBar />
    </Provider>
  );
});

// TODO extend basic tests configuration
