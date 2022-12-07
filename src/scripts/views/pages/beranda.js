/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import PafaDbSource from '../../data/pafadb-source';
import { createPafaItemTemplate } from '../templates/template-creator';

const Beranda = {
  async render() {
    return `
        <div id="search-container" class="search-container">
          <input placeholder="Search Meal" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
        <h2>BERANDA</h2>
        <article class="data">
          <div class="pafa-item">
            <div class="pafa-item__header">
              <img class="pafa-item__header__poster" alt="Orangtua"
                  src="../images/heros/orangtua.jpg">
            </div>
            <div class="pafa-item__content">
              <h3><a href="#">Orang Tua</a></h3>
            </div>
          </div>

          <div class="pafa-item">
            <div class="pafa-item__header">
              <img class="pafa-item__header__poster" alt="Anak"
                  src="../images/heros/anak.jpg">
            </div>
            <div class="pafa-item__content">
              <h3><a href="#">Anak</a></h3>
            </div>
          </div>

          <div class="pafa-item">
            <div class="pafa-item__header">
              <img class="pafa-item__header__poster" alt="Orangtua"
                  src="../images/heros/orangtua.jpg">
            </div>
            <div class="pafa-item__content">
              <h3><a href="#">Ibu Muda</a></h3>
            </div>
          </div>
      
        </article>
        <div class="content">
        <h2 class="content__heading">Restoran Yang Kami Rekomendasikan</h2>
          <div id="pafas" class="pafas">
          </div>
        </div>
      `;
  },

  async afterRender() {
    const pafamilys = await PafaDbSource.listPafa();
    const restosContainer = document.querySelector('#pafas');
    pafamilys.forEach((pafa) => {
      restosContainer.innerHTML += createPafaItemTemplate(pafa);
    });
  },
};

export default Beranda;
