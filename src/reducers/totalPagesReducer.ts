type Action = TotalPagesAction;

const initialTotalPagesState = 1;

interface TotalPagesAction {
  type: 'SET_TOTAL_PAGES';
  payload: number;
}

const totalPagesReducer = (state = initialTotalPagesState, action: Action) => {
  switch (action.type) {
    case 'SET_TOTAL_PAGES':
      return action.payload;
    default:
      return state;
  }
};

export default totalPagesReducer;
