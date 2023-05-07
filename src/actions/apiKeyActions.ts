export const SET_API_KEY = 'SET_API_KEY';

export const setApiKey = (apiKey: string) => {
  return {
    type: SET_API_KEY,
    payload: apiKey,
  };
};
