import styled from 'styled-components';
import {
  COLOR_GREY,
  COLOR_GREY_TERTIARY,
  COLOR_WHITE,
} from '../../styles/tokens/colors';

type isUserValidated = boolean;

export const ApiKeyForm = styled.form`
  position: relative;
  display: inline-block;
`;

export const ApiKeyBar = styled.input<{ isUserValidated: isUserValidated }>`
  padding: 0.5rem 2rem;
  border: 2px solid ${COLOR_GREY_TERTIARY};
  border-radius: 4px;
  background-color: ${COLOR_GREY};
  color: ${COLOR_WHITE};
  caret-color: ${COLOR_WHITE};
  border-color: ${({ isUserValidated }) => (isUserValidated ? '#556e82' : '')};

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${COLOR_WHITE};
    opacity: 1;
  }
`;

export const KeyIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
  height: 50%;
`;
