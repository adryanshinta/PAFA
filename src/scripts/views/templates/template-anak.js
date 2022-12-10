import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createAnakPafaItemTemplate = (anak) => `
<div class="pafa-item">
  <div class="pafa-item__header">
    <img class="pafa-item__header__poster lazyload" alt="${anak.name}"
         data-src="${anak.pictureId}" 
         style="height:200px;">
  </div>
  <div class="pafa-item__content">
    <h3><a href="/#/detail-anak/${anak.id}">${anak.name}</a></h3>
    <p>${anak.description}</p>
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
  createAnakPafaItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
