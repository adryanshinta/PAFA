import CONFIG from './config';

const API_ENDPOINT = {
  NEWS: `${CONFIG.BASE_URL}apiKey=${CONFIG.API_KEY}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}apiKey=${CONFIG.API_KEY}/${id}`,
};

export default API_ENDPOINT;
