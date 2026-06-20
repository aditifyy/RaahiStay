function Login() {
  return (
    <section className="login-page">

      <div className="login-card">

        <p className="section-tag">WELCOME BACK</p>

        <h1>Sign In</h1>

        <input type="email" placeholder="Email Address" />

        <input type="password" placeholder="Password" />

        <button>Login</button>

        <p className="login-text">
          New here? Create an account
        </p>

      </div>

    </section>
  );
}

export default Login;