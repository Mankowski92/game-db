import styled from 'styled-components';
import {
  COLOR_GREY,
  COLOR_GREY_TERTIARY,
  COLOR_WHITE,
} from '../../styles/tokens/colors';

export const SearchInput = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const SearchBar = styled.input`
  padding: 0.5rem 2rem;
  border: 2px solid ${COLOR_GREY_TERTIARY};
  border-radius: 4px;
  background-color: ${COLOR_GREY};
  color: ${COLOR_WHITE};
  caret-color: ${COLOR_WHITE};
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${COLOR_WHITE};
    opacity: 1;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  height: 50%;
`;
