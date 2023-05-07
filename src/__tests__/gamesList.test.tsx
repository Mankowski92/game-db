import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { GamesList } from '../components/gamesList/GamesList';

test('renders ApiKeyInput component', () => {
  render(
    <Provider store={store}>
      <GamesList />
    </Provider>
  );
});

// TODO extend basic tests configuration
