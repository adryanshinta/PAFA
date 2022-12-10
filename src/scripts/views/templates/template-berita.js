const createBeritaItemTemplate = (berita) => `
  <div class="pafa-item">
  <div class="pafa-item__header">
    <img class="pafa-item__header__poster lazyload" alt="${berita.title}"
         data-src="${berita.urlToImage}" 
         style="height:200px;">
  </div>
  <div class="pafa-item__content">
    <h3><a href="${berita.url}">${berita.title}</a></h3>
    <p>${berita.description}</p>
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
  createBeritaItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
