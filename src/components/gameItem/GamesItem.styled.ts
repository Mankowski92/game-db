import styled from 'styled-components';
import { COLOR_WHITE, COLOR_GREY_SECONDARY } from '../../styles/tokens/colors';

export const Container = styled.article`
  background-color: ${COLOR_GREY_SECONDARY};
  color: ${COLOR_WHITE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DetailsWrapper = styled.div`
  margin: 1.25rem 1rem 1rem 1rem;
`;

export const GameName = styled.div`
  margin-bottom: 0.5rem;
`;

export const GamePlatforms = styled.div`
  font-size: 0.75rem;
`;
