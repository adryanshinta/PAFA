import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createOrangTuaPafaItemTemplate = (orangtua) => `
<div class="pafa-item">
  <div class="pafa-item__header">
    <img class="pafa-item__header__poster lazyload" alt="${orangtua.name}"
         data-src="${orangtua.pictureId}" 
         style="height:200px;">
  </div>
  <div class="pafa-item__content">
    <h3><a href="/#/detail-orangtua/${orangtua.id}">${orangtua.name}</a></h3>
    <p>${orangtua.description}</p>
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
  createOrangTuaPafaItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
