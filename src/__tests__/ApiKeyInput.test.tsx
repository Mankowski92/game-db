import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ApiKeyInput from '../components/apiKeyInput/apiKeyInput';

test('renders ApiKeyInput component', () => {
  render(
    <Provider store={store}>
      <ApiKeyInput />
    </Provider>
  );
});

// TODO extend basic tests configuration
