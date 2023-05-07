import React from 'react';
import {
  ApiKeyInputWrapper,
  Container,
  GamepadCrossLogo,
  GameSearchWrapper,
  Logo,
  LogoText,
} from './topBar.styled';
import GameSearch from '../gamesSearch/GameSearch';
import ApiKeyInput from '../apiKeyInput/apiKeyInput';
import gamepadCrossLogo from '../../assets/gamepadCross.png';

const TopBar = () => {
  return (
    <Container data-testid="top-bar">
      <Logo>
        <GamepadCrossLogo src={gamepadCrossLogo} alt="gamepad logo" />
        <LogoText>Game DB</LogoText>
      </Logo>
      <GameSearchWrapper>
        <GameSearch />
      </GameSearchWrapper>
      <ApiKeyInputWrapper>
        <ApiKeyInput />
      </ApiKeyInputWrapper>
    </Container>
  );
};

export default TopBar;
