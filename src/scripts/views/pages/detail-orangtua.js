/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
import UrlParser from '../../routes/url-parser';
import orangtuas from '../../data/ORANGTUA.json';

const DetailOrangTua = {
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
    const detailOrangTua = () => {
      pafaContainer.innerHTML
            += ` 
            <h2 class="pafa__title">${orangtuas.orangtuas[id - 1].name}</h2>
            <img class="pafa__poster" src="${orangtuas.orangtuas[id - 1].pictureId}" alt="${orangtuas.name}" />
            <div class="pafa__info" >
              <h3>Information</h3>
              <h4>Penulis</h4>
              <p>${orangtuas.orangtuas[id - 1].penulis}</p>
            </div>
            <div class="pafa__overview">
              <h3>Tanggal Terbit</h3>
              <p>${orangtuas.orangtuas[id - 1].tglterbit}</p>
              <h3>Overview</h3>
              <p>${orangtuas.orangtuas[id - 1].description}</p>
            </div>`;
    };
    detailOrangTua();
  },
};

export default DetailOrangTua;
