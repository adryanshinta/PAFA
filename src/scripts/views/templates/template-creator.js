/* eslint-disable no-multiple-empty-lines */
import CONFIG from '../../globals/config';

const createPafaDetailTemplate = (restoran) => `
  <h2 class="pafa__title">${restoran.name}</h2>
  <img class="pafa__poster" src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}" alt="${restoran.name}" />
  <div class="pafa__info" >
    <h3>Information</h3>
    <h4>Kota</h4>
    <p>${restoran.city}</p>
    <h4>Alamat</h4>
    <p>${restoran.address}</p>
    <h4>Rating</h4>
    <p>${restoran.rating}</p>
  </div>
  <div class="pafa__overview">
    <h3>Overview</h3>
    <p>${restoran.description}</p>
  </div>
  <div class="pafa__overview">
    <h4>Menu Minuman</h4>
    <p>${restoran.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
    <br/>
    <h4>Menu Makanan</h4>
    <p>${restoran.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
  </div>
  <div class="customer__review">
    <p> ${restoran.customerReviews.reduce((show, value) => show.concat(`<br>
    <p>${value.name}</p>
    <p>${value.review}</p>
    <p>${value.date}</p>
    `), '<h4>Customer Reviews:</h4>')}</p>
  </div>
`;

const createPafaItemTemplate = (restoran) => `
  <div class="pafa-item">
    <div class="pafa-item__header">
      <img class="pafa-item__header__poster" alt="${restoran.name}"
           src="${restoran.pictureId ? CONFIG.BASE_IMAGEITEM_URL + restoran.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="pafa-item__header__rating">
        <p>⭐️<span class="pafa-item__header__rating__score">${restoran.rating}</span></p>
      </div>
    </div>
    <div class="pafa-item__content">
      <h3><a href="/#/detail/${restoran.id}">${restoran.name}</a></h3>
      <p>${restoran.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;


export {
  createPafaDetailTemplate,
  createPafaItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
