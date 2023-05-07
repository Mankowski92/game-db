import { Game } from '../types/game';
import { API_BASE_URL } from '../../utils/consts';

type GamesResponse = {
  results: Game[];
  count: number;
};

type FetchGamesResult = {
  results: Game[];
  totalPages: number;
};

export const fetchGames = (
  page: number,
  apiKey: string
): Promise<FetchGamesResult> => {
  return fetch(
    `${API_BASE_URL}/games?key=${apiKey}&page_size=10&page=${page}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => response.json())
    .then((data: GamesResponse) => {
      const results = data.results;
      const totalPages = Math.ceil(data.count / 10);
      return { results, totalPages };
    })
    .catch((error) => {
      console.error(error);
      return { results: [], totalPages: 1 };
    });
};
