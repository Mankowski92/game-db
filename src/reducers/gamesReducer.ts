import { Game } from '../lib/types/game';
import { SET_GAMES, GameActionTypes } from '../actions/gameActions';

export type GameState = {
  games: Game[];
};

const initialState: GameState = {
  games: [],
};

export const gamesReducer = (
  state = initialState,
  action: GameActionTypes
): GameState => {
  switch (action.type) {
    case SET_GAMES:
      return { ...state, games: action.payload };
    default:
      return state;
  }
};

export default gamesReducer;
