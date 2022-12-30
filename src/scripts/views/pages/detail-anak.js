/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import UrlParser from '../../routes/url-parser';
import anaks from '../../data/ANAK.json';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detailanak = {
  async render() {
    return `
      <div id="pafa" class="pafa"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { id } = url;
    const pafaContainer = document.querySelector('#pafa');
    const detailanak = () => {
      pafaContainer.innerHTML
            += ` 
            <h2 class="pafa__title">${anaks.anaks[id - 1].name}</h2>
            <img class="pafa__poster" src="${anaks.anaks[id - 1].pictureId}" alt="${anaks.name}" />
            <div class="pafa__info" >
              <h3>Information</h3>
              <h4>Penulis</h4>
              <p>${anaks.anaks[id - 1].penulis}</p>
            </div>
            <div class="pafa__overview">
              <h3>Tanggal Terbit</h3>
              <p>${anaks.anaks[id - 1].tglterbit}</p>
              <h3>Overview</h3>
              <p>${anaks.anaks[id - 1].description}</p>
            </div>`;
    };
    detailanak();

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.addEventListener('click', () => {
      if (document.getElementsByClassName('liked')[0]) {
        likeButtonContainer.innerHTML = createLikeButtonTemplate();
      } else {
        likeButtonContainer.innerHTML = createLikedButtonTemplate();
      }
    });

    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detailanak;
