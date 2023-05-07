import styled from 'styled-components';
import { COLOR_GREY, COLOR_WHITE } from '../../styles/tokens/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLOR_GREY};
  padding: 0.5rem 1rem;
  gap: 1rem;

  @media (max-width: 560px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.25rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${COLOR_WHITE};

  @media (max-width: 560px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 0.25rem;
  }
`;

export const LogoText = styled.span``;

export const GamepadCrossLogo = styled.img`
  object-fit: cover;
  max-width: 100%;
  height: 1.25rem;
`;

export const GameSearchWrapper = styled.div`
  flex: 2;
`;

export const ApiKeyInputWrapper = styled.div`
  min-width: 150px;
`;
