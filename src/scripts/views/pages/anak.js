/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import anaks from '../../data/ANAK.json';
import PafaDbSource from '../../data/pafadb-source';
import { createAnakPafaItemTemplate } from '../templates/template-anak';

const AnakPage = {
  async render() {
    return `
        <div class="content">
        <h2 class="content__heading"> Hallo, Berikut Artikel Anak Yang Kami Rekomendasikan</h2>
          <div id="pafas" class="pafas">
          </div>
        </div>
      `;
  },

  async afterRender() {
    const pafasContainer = document.querySelector('#pafas');
    anaks.anaks.forEach((pafa) => {
      pafasContainer.innerHTML += createAnakPafaItemTemplate(pafa);
    });
  },
};

export default AnakPage;
