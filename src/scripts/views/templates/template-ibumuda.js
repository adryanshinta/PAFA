const createIbuMudaPafaDetailTemplate = (ibumuda) => `
<h2 class="pafa__title">${ibumuda.name}</h2>
<img class="pafa__poster" src="${ibumuda.pictureId}" alt="${ibumuda.name}" />
<div class="pafa__info" >
  <h3>Information</h3>
  <h4>Penulis</h4>
  <p>${ibumuda.penulis}</p>
</div>
<div class="pafa__overview">
  <h3>Tanggal Terbit</h3>
  <p>${ibumuda.tglterbit}</p>
  <h3>Overview</h3>
  <p>${ibumuda.description}</p>
</div>
`;

const createIbuMudaPafaItemTemplate = (ibumuda) => `
<div class="pafa-item">
  <div class="pafa-item__header">
    <img class="pafa-item__header__poster" alt="${ibumuda.name}"
         src="${ibumuda.pictureId}" 
         style="height:200px;">
  </div>
  <div class="pafa-item__content">
    <h3><a href="/#/detail-anak/${ibumuda.id}">${ibumuda.name}</a></h3>
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
  createIbuMudaPafaDetailTemplate,
  createIbuMudaPafaItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
