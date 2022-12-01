/* eslint-disable no-tabs */
const About = {
    async render() {
      return `
      <article>
      <div class="text-container">
      <p>Hello,</p>
         <p>WE ARE PAFA</p>
      <p>Parenting And Family Website</p>
               <p>PAFA adalah ruang belajar parenting ,family, dan pendidikan. 
               <br>Disini menyajikan informasi  yang dibutuhkan orang tua dan ibu muda 
               <br>tentang tips  menjaga  pertumbuhan dan perkembangan anak
               <br> sehingga dapat menciptakan 
               keluarga yang berkualitas dan beredukasi .</p>
      <button class="hire-btn">Orang Tua</button>
      <button class="down-cv">Anak</button>
      <button class="hire-btn"> Ibu Muda</button>
     </div>
           <img alt="model" class="model" src="../images/heros/logo.png");">  
    </article>
  
    
    <article class="namatim">
    <h1 class="namatim-label">List Our team</h1>
    </article>
  
    <article class="tim">
            <div class="our-team ">
            <img  class = "pic" src="../images/heros/jacki.jpg" alt="jacki");
                      </div>
                      <div class="team-content">
                          <h3 class="title">Jacki Andrazat</h3>
                          <span class="post">BackEnd Developer</span>
                      </div>
            </div>
                  
            <div class="our-team ">
            <img class ="pic" src="../images/heros/ica.jpg" alt="ica");
                      </div>
                      <div class="team-content">
                          <h3 class="title">Ica Nur Pramanti</h3>
                          <span class="post">Front End Developer</span>
                      </div>
            </div>
                      
            <div class="our-team ">
            <img class="pic" src="../images/heros/shinta.jpg" alt="shinta");
          </div>
          <div class="team-content">
            <h3 class="title">Shinta Nilam Sari Muslim</h3>
            <span class="post">Front End Developer</span>
          </div>
          </div>
  
          <div class="our-team ">
                          <img class="pic" src="../images/heros/adrian.jpg" alt="adrian");
                      </div>
                      <div class="team-content">
                          <h3 class="title">Adryan Syah</h3>
                          <span class="post">BackEnd Developer</span>
                      </div>
            <div>
            
  
    </article>
        `;
    },
  
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
  
  export default About;
  