/* eslint-disable no-tabs */

const Ibumuda = {
  async render() {
    return `
        <div class="role">
            <h1>Selamat Datang Ibu Muda!</h1>
            <br>
            <p>Berikut tag artikel rekomendasi kami:</p>
    
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
            <p>Jangan lupa baca juga artikel terbaru kami dibawah ini ya!</p>
        </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Ibumuda;
