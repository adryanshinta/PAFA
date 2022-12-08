const createOrangTuaPafaDetailTemplate = (orangtua) => `
<h2 class="pafa__title">${orangtua.name}</h2>
<img class="pafa__poster" src="${orangtua.pictureId}" alt="${orangtua.name}" />
<div class="pafa__info" >
  <h3>Information</h3>
  <h4>Penulis</h4>
  <p>${orangtua.penulis}</p>
</div>
<div class="pafa__overview">
  <h3>Tanggal Terbit</h3>
  <p>${orangtua.tglterbit}</p>
  <h3>Overview</h3>
  <p>${orangtua.description}</p>
</div>
`;

const createOrangTuaPafaItemTemplate = (orangtua) => `
<div class="pafa-item">
  <div class="pafa-item__header">
    <img class="pafa-item__header__poster" alt="${orangtua.name}"
         src="${orangtua.pictureId}" 
         style="height:200px;">
  </div>
  <div class="pafa-item__content">
    <h3><a href="/#/detail-anak/${orangtua.id}">${orangtua.name}</a></h3>
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
  createOrangTuaPafaDetailTemplate,
  createOrangTuaPafaItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
