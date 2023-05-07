import { Game } from '../types/game';
import { API_BASE_URL } from '../../utils/consts';

export const searchGames = (query: string, apiKey: string): Promise<Game[]> => {
  return fetch(
    `${API_BASE_URL}/games?key=${apiKey}&search=${query}&page_size=10&page=1`
  )
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => {
      console.error(error);
    });
};
