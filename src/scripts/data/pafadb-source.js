/* eslint-disable no-undef */
import API_ENDPOINT from '../globals/api-endpoint';

class PafaDbSource {
  static async listPafa() {
    const response = await fetch(API_ENDPOINT.NEWS);
    const responseJson = await response.json();
    return responseJson.articles;
  }

  static async detailPafa(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.article;
  }

  static async postRestaurant(data) {
    const rawResponse = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded | application/json',
      },
      body: JSON.stringify(data),
    });
    return rawResponse;
  }
}

export default PafaDbSource;
