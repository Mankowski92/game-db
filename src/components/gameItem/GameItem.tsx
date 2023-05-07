import React from 'react';
import { Game, Platform } from '../../lib/types/game';
import {
  Container,
  DetailsWrapper,
  GameImage,
  GameName,
  GamePlatforms,
} from './GamesItem.styled';

type GameItemProps = {
  game: Game;
};

export const GameItem = ({ game }: GameItemProps) => {
  return (
    <Container>
      <GameImage src={game.background_image} alt={game.name} />
      <DetailsWrapper>
        <GameName>{game.name}</GameName>
        <GamePlatforms>
          {game.platforms
            .map((item: Platform) => item.platform.name)
            .join(', ')}
        </GamePlatforms>
      </DetailsWrapper>
    </Container>
  );
};
