import FavoritePafaIdb from '../../data/favorite-pafa-idb';
import { createPafaItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Artikel Yang Kamu Sukai</h2>
        <div id="pafas" class="pafas">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const pafas = await FavoritePafaIdb.getAllPafas();
    const pafasContainer = document.querySelector('#pafas');

    pafas.forEach((pafa) => {
      pafasContainer.innerHTML += createPafaItemTemplate(pafa);
    });
  },
};

export default Like;
