/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import UrlParser from '../../routes/url-parser';
import ibumudas from '../../data/IBUMUDA.json';
import { createAnakPafaDetailTemplate, createAnakPafaItemTemplate } from '../templates/template-anak';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailIbuMuda = {
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
    const detailIbumuda = () => {
      pafaContainer.innerHTML
            += ` 
            <h2 class="pafa__title">${ibumudas.ibumudas[id - 1].name}</h2>
            <img class="pafa__poster" src="${ibumudas.ibumudas[id - 1].pictureId}" alt="${ibumudas.name}" />
            <div class="pafa__info" >
              <h3>Information</h3>
              <h4>Penulis</h4>
              <p>${ibumudas.ibumudas[id - 1].penulis}</p>
            </div>
            <div class="pafa__overview">
              <h3>Tanggal Terbit</h3>
              <p>${ibumudas.ibumudas[id - 1].tglterbit}</p>
              <h3>Overview</h3>
              <p>${ibumudas.ibumudas[id - 1].description}</p>
            </div>`;
    };
    detailIbumuda();
  },
};

export default DetailIbuMuda;
