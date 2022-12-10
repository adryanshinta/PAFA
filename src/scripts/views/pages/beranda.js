/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import PafaDbSource from '../../data/pafadb-source';
import { createPafaItemTemplate } from '../templates/template-creator';

const Beranda = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Choose Your Article Menu </h2>
    </div>
        <article class="data">
          <div class="pafa-item">
            <div class="pafa-item__header">
              <img class="pafa-item__header__poster" alt="Parent"
                  src="../images/heros/orangtua.jpg">
            </div>
            <div class="pafa-item__content">
              <h3><a href="#/orangtua">Parent</a></h3>
            </div>
          </div>

          <div class="pafa-item">
            <div class="pafa-item__header">
              <img class="pafa-item__header__poster" alt="Children"
                  src="../images/heros/anak.jpg">
            </div>
            <div class="pafa-item__content">
              <h3><a href="#/anak">Children</a></h3>
            </div>
          </div>

          <div class="pafa-item">
            <div class="pafa-item__header">
              <img class="pafa-item__header__poster" alt="YoungMother"
                  src="../images/heros/ibumuda.jpeg">
            </div>
            <div class="pafa-item__content">
              <h3><a href="#/ibumuda">YoungMother</a></h3>
            </div>
          </div>
      
        </article>
       
      `;
  },

  async afterRender() {
    const pafamilys = await PafaDbSource.listPafa();
    const restosContainer = document.querySelector('#pafas');
  },
};

export default Beranda;
