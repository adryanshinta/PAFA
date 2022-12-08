/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import UrlParser from '../../routes/url-parser';
import dataJSON from '../../data/ANAK.json';
import { createAnakPafaDetailTemplate, createAnakPafaItemTemplate } from '../templates/template-anak';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detailanak = {
  async render() {
    return `
      <div id="pafa" class="pafa"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const { anaks } = JSON.parse(JSON.stringify(dataJSON.id));
    const pafaContainer = document.querySelector('#pafa');

    pafaContainer.innerHTML = createAnakPafaDetailTemplate(anaks);
  },
};

export default Detailanak;
