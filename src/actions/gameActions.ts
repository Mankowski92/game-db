import { Game } from '../lib/types/game';

export const SET_GAMES = 'SET_GAMES';

export interface SetGamesAction {
  type: typeof SET_GAMES;
  payload: Game[];
}

export type GameActionTypes = SetGamesAction;
