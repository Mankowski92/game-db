import styled from 'styled-components';
import {
  COLOR_BLACK,
  COLOR_GREY_TERTIARY,
  COLOR_WHITE,
} from '../../styles/tokens/colors';

export const Container = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 4rem 4rem 1rem 4rem;
`;
export const InputWrapper = styled.span`
  position: relative;
  display: inline-block;
`;

export const Label = styled.label`
  margin: 10px;
  pointer-events: none;
  position: absolute;
  left: 6px;
  top: -16px;
  transition: 0.2s;
  color: ${COLOR_WHITE};
  font-size: 0.6rem;
  background-color: ${COLOR_BLACK};
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid ${COLOR_GREY_TERTIARY};
  border-radius: 4px;
  margin: 2rem 1rem 2rem 2rem;
  caret-color: ${COLOR_WHITE};
`;

export const Input = styled.input`
  flex: 1;
  padding: 1rem 0.5rem;
  border: none;
  background-color: ${COLOR_BLACK};
  color: ${COLOR_WHITE};
  width: auto;

  &:focus {
    outline: none;
  }
`;

export const NoApiKeyInfo = styled.h1`
  text-align: center;
  color: ${COLOR_WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10rem);
`;

export const ValidityInformation = styled.span`
  color: ${COLOR_WHITE};
`;
