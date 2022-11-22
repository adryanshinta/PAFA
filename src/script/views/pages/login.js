const Login = {
    async render() {
      return `
      <div class="container">
      <h1>Login</h1>
        <form>
            <label>Username</label><br>
            <input type="text"><br>
            <label>Password</label><br>
            <input type="password"><br>
            <button>Log in</button>
        </form>
    </div>   
          `;
    },
  
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
  
  export default Login;
  