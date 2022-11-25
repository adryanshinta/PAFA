/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import UrlParser from '../../routes/url-parser';
import PafaDbSource from '../../data/pafadb-source';
import { createPafaDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="restoran" class="restoran"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const pafamily = await PafaDbSource.detailPafa(url.id);
    const pafaContainer = document.querySelector('#restoran');
    pafaContainer.innerHTML = createPafaDetailTemplate(pafamily);
  },
};

export default Detail;
