import PafaDbSource from '../../data/pafadb-source';
import { createBeritaItemTemplate } from '../templates/template-berita';

const BeritaPage = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Berita Terbaru Seputar Kesehatan</h2>
        <div id="pafas" class="pafas">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const pafas = await PafaDbSource.listPafa();
    const pafasContainer = document.querySelector('#pafas');
    pafas.forEach((berita) => {
      pafasContainer.innerHTML += createBeritaItemTemplate(berita);
    });
  },
};

export default BeritaPage;
