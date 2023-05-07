import React, { useEffect, useCallback, useState } from 'react';
import { RootState } from '../../lib/types/types';
import {
  Container,
  NoApiKeyInfo,
  Pagination,
  InputWrapper,
  Label,
  Input,
  ValidityInformation,
} from './GamesList.styled';
import { fetchGames } from '../../lib/api/games';
import { GameItem } from '../gameItem/GameItem';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '../../lib/hooks/debounce';

export const GamesList = () => {
  const dispatch = useDispatch();
  const apiKey = useSelector((state: RootState) => state.apiKey);
  const games = useSelector((state: RootState) => state.games);
  const totalPages = useSelector((state: RootState) => state.totalPages);
  const [pageNumber, setPageNumber] = useState(1);
  const [inputValue, setInputValue] = useState('1');

  const debouncedPageNumber = useDebounce(pageNumber, 500);

  const isValidPageNumber = useCallback(
    (value: string | number) => {
      const parsedValue = Number(value);
      return (
        !isNaN(parsedValue) && parsedValue > 0 && parsedValue <= totalPages
      );
    },
    [totalPages]
  );

  useEffect(() => {
    if (apiKey && isValidPageNumber(debouncedPageNumber)) {
      fetchGames(debouncedPageNumber, apiKey).then(
        ({ results, totalPages }) => {
          dispatch({ type: 'SET_GAMES', payload: results });
          dispatch({ type: 'SET_TOTAL_PAGES', payload: totalPages });
        }
      );
    }
  }, [apiKey, dispatch, debouncedPageNumber, isValidPageNumber]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setInputValue(value);
      if (isValidPageNumber(value)) {
        setPageNumber(Number(value));
      }
    },
    [isValidPageNumber]
  );

  return (
    <>
      {apiKey && games?.games?.length ? (
        <>
          <Container>
            {games.games.map((game) => (
              <GameItem key={game.id} game={game} />
            ))}
          </Container>
          <Pagination>
            <InputWrapper>
              <Input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder=" "
              />
              <Label>Go to page</Label>
            </InputWrapper>
            {!isValidPageNumber(inputValue) && (
              <ValidityInformation>NOT A VALID NUMBER</ValidityInformation>
            )}
          </Pagination>
        </>
      ) : (
        <NoApiKeyInfo>Please provide correct api key</NoApiKeyInfo>
      )}
    </>
  );
};
