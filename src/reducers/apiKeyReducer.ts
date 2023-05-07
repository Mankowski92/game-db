interface ApiKeyAction {
  type: 'SET_API_KEY';
  payload: string;
}

type Action = ApiKeyAction;

const initialState = '';

const apiKeyReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_API_KEY':
      return action.payload;
    default:
      return state;
  }
};

export default apiKeyReducer;
