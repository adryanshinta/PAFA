const Beranda = {
  async render() {
    return `
        <div id="search-container" class="search-container">
          <input placeholder="Search Meal" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit">Search</button>
        </div>
        <h2>BERANDA</h2>
        <article class="data">
     
        <article id="orangtua" class="card">
                    <h2 class="tagline">Orangtua</h2>
                    <img src="../images/heros/orangtua.jpg");
                    class="featured-image" alt="orangtua">
        </article>
        
        <article id="anak" class="card">
                    <h2 class="tagline">Anak</h2>
                    <img src="../images/heros/anak.jpg");
                    class="featured-image" alt="orangtua">
        </article>
    
        
        <article id="ibumuda" class="card">
                    <h2 class="tagline">Ibu Muda</h2>
                    <img src="../images/heros/orangtua.jpg");
                    class="featured-image" alt="ibumuda">
        </article>
      
      </article>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Beranda;
