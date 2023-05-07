interface PageAction {
  type: 'SET_PAGE';
  payload: number;
}

type Action = PageAction;

const initialPageState = 1;

const pageReducer = (state = initialPageState, action: Action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return action.payload;
    default:
      return state;
  }
};

export default pageReducer;
