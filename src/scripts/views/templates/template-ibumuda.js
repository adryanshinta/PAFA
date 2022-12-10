import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createIbuMudaPafaItemTemplate = (ibumuda) => `
<div class="pafa-item">
  <div class="pafa-item__header">
    <img class="pafa-item__header__poster lazyload" alt="${ibumuda.name}"
         data-src="${ibumuda.pictureId}" 
         style="height:200px;">
  </div>
  <div class="pafa-item__content">
    <h3><a href="/#/detail-ibumuda/${ibumuda.id}">${ibumuda.name}</a></h3>
    <p>${ibumuda.description}</p>
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
  createIbuMudaPafaItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
