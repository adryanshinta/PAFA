/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import dataJSON from '../../data/IBUMUDA.json';
import PafaDbSource from '../../data/pafadb-source';
import { createIbuMudaPafaItemTemplate } from '../templates/template-ibumuda';

const IbuMudaPage = {
  async render() {
    return `
        <div class="content">
        <h2 class="content__heading">Artikel Yang Kami Rekomendasikan</h2>
          <div id="pafas" class="pafas">
          </div>
        </div>
      `;
  },

  async afterRender() {
    const { ibumudas } = JSON.parse(JSON.stringify(dataJSON));
    const pafasContainer = document.querySelector('#pafas');
    ibumudas.forEach((pafa) => {
      pafasContainer.innerHTML += createIbuMudaPafaItemTemplate(pafa);
    });
  },
};

export default IbuMudaPage;