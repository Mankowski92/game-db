import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { GameItem } from '../components/gameItem/GameItem';

import { Game } from '../lib/types/game';

const mockedGame: Game = {
  id: 123,
  background_image: 'https://example.com/game-image.jpg',
  name: 'Mocked Game',
  platforms: [],
  released: '2022-01-01',
};

test('renders ApiKeyInput component', () => {
  render(
    <Provider store={store}>
      <GameItem game={mockedGame}></GameItem>
    </Provider>
  );
});

// TODO extend basic tests configuration
