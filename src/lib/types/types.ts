import { Game } from './game';

export interface RootState {
  apiKey: string;
  games: { games: Game[] };
  searchedGames: Game[];
  page: number;
  totalPages: number;
}
