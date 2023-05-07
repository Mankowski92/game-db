import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import GameSearch from '../components/gamesSearch/GameSearch';

test('renders ApiKeyInput component', () => {
  render(
    <Provider store={store}>
      <GameSearch />
    </Provider>
  );
});

// TODO extend basic tests configuration
