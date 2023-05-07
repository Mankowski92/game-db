import React, { useState, useCallback, useEffect } from 'react';
import { searchGames } from '../../lib/api/search';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../lib/types/types';
import { useDebounceMinCharacters } from '../../lib/hooks/debounce';
import { SearchIcon, SearchInput, SearchBar } from './GamesSearch.styled';
import search from '../../assets/search.png';

const SEARCH_MIN_CHARACTERS = 2;

const GameSearch: React.FC = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const apiKey = useSelector((state: RootState) => state.apiKey);

  const deferredSearchPhrase = useDebounceMinCharacters(
    searchQuery,
    500,
    SEARCH_MIN_CHARACTERS
  );

  const debouncedSearch = useCallback(() => {
    if (apiKey && deferredSearchPhrase) {
      searchGames(deferredSearchPhrase, apiKey).then((searchedGames) => {
        dispatch({ type: 'SET_GAMES', payload: searchedGames });
      });
    } else if (!searchQuery && apiKey) {
      searchGames('', apiKey).then((searchedGames) => {
        dispatch({ type: 'SET_GAMES', payload: searchedGames });
      });
    }
  }, [apiKey, deferredSearchPhrase, dispatch, searchQuery]);

  useEffect(() => {
    debouncedSearch();
  }, [debouncedSearch, deferredSearchPhrase]);

  const handleSearchQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value;
      setSearchQuery(query);
    },
    []
  );

  return (
    <SearchInput>
      <SearchBar
        value={searchQuery}
        onChange={handleSearchQueryChange}
        type="text"
        placeholder="Search for game"
        id="search"
      />
      <SearchIcon src={search} alt="Search icon" />
    </SearchInput>
  );
};

export default GameSearch;
