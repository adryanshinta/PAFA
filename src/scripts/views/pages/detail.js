/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import UrlParser from '../../routes/url-parser';
import PafaDbSource from '../../data/pafadb-source';
import { createPafaDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

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

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      pafamily: {
        id: pafamily.id,
        name: pafamily.name,
        description: pafamily.description,
        pictureId: pafamily.pictureId,
        rating: pafamily.rating,
      },
    });
  },
};

export default Detail;
