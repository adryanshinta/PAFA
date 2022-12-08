const createAnakPafaDetailTemplate = (anak) => `
<h2 class="pafa__title">${anak.name}</h2>
<img class="pafa__poster" src="${anak.pictureId}" alt="${anak.name}" />
<div class="pafa__info" >
  <h3>Information</h3>
  <h4>Penulis</h4>
  <p>${anak.penulis}</p>
</div>
<div class="pafa__overview">
  <h3>Tanggal Terbit</h3>
  <p>${anak.tglterbit}</p>
  <h3>Overview</h3>
  <p>${anak.description}</p>
</div>
`;

const createAnakPafaItemTemplate = (anak) => `
<div class="pafa-item">
  <div class="pafa-item__header">
    <img class="pafa-item__header__poster" alt="${anak.name}"
         src="${anak.pictureId}" 
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
  createAnakPafaDetailTemplate,
  createAnakPafaItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
