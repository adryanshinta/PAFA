/* eslint-disable no-tabs */

const Anak = {
  async render() {
    return `
        <div class="role">
            <h1>Hallo Selamat Datang Adik-Adik!</h1>
            <br>
            <p>Pilih salah satu tag rekomendasi kami dibawah ya!</p>
    
            <div class="card">
                <table>
                    <tr>
                        <td><a href="" </a>Tag 1</td>
                        <td><a href="" </a>Tag 2</td>
                        <td><a href="" </a>Tag 3</td>
                        <td><a href="" </a>Tag 4</td>
                        <td><a href="" </a>Tag 5</td>
                        <td><a href="" </a>Tag 6</td>
                        <td><a href="" </a>Tag 7</td>
                        <td><a href="" </a>Tag 8</td>    
                    </tr>
                </table>
            </div>
            <br>
            <br>
            <p>Atau adik-adik bisa baca postingan terbaru kami dibawah ini!</p>
        </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Anak;
