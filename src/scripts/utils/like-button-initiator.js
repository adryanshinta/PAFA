/* eslint-disable no-underscore-dangle */
import FavoritePafaIdb from '../data/favorite-pafa-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, pafamily }) {
    this._likeButtonContainer = likeButtonContainer;
    this._pafa = pafamily;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._pafa;

    if (await this._isPafaExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isPafaExist(id) {
    const pafa = await FavoritePafaIdb.getPafa(id);
    return !!pafa;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoritePafaIdb.putPafa(this._pafa);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoritePafaIdb.deletePafa(this._pafa.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
