/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import dataJSON from '../../data/ANAK.json';
import PafaDbSource from '../../data/pafadb-source';
import { createAnakPafaItemTemplate } from '../templates/template-creator';

const AnakPage = {
  async render() {
    return `
        <div class="content">
        <h2 class="content__heading">Restoran Yang Kami Rekomendasikan</h2>
          <div id="pafas" class="pafas">
          </div>
        </div>
      `;
  },

  async afterRender() {
    const { anaks } = JSON.parse(JSON.stringify(dataJSON));
    const pafasContainer = document.querySelector('#pafas');
    anaks.forEach((pafa) => {
      pafasContainer.innerHTML += createAnakPafaItemTemplate(pafa);
    });
  },
};

export default AnakPage;
