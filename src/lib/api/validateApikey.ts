import { API_BASE_URL } from '../../utils/consts';

export const validateApiKey = async (apiKey: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/games?key=${apiKey}`);
    return response.ok;
  } catch (error) {
    console.error(error);
  }
};
