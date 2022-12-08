/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import dataJSON from '../../data/ORANGTUA.json';
import PafaDbSource from '../../data/pafadb-source';
import { createOrangTuaPafaItemTemplate } from '../templates/template-ortu';

const OrtuPage = {
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
    const { orangtuas } = JSON.parse(JSON.stringify(dataJSON));
    const pafasContainer = document.querySelector('#pafas');
    orangtuas.forEach((pafa) => {
      pafasContainer.innerHTML += createOrangTuaPafaItemTemplate(pafa);
    });
  },
};

export default OrtuPage;
