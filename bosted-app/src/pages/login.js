const Login = () => {
  return (
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
      
      <div class="content-container">
        <div class="login-content">
          <div class="login-top">
            <h6>Log in or Sign Up</h6>
          </div>
          <div class="login-bottom">
            <div class="login-account">
              <div class="account-input">
                <label for="Username">Username </label>
                <input type="text" id="Username" name="Username" />
              </div>
              <div class="account-input">
                <label for="password">Password </label>
                <input type="password" id="password" name="password" />
              </div>
            </div>
            <hr />
            <div class="create-account">
              <div class="account-input">
                <label for="first-name">First Name </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="John"
                />
              </div>
              <div class="account-input">
                <label for="last-name">Last Name </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Smith"
                />
              </div>
              <div class="account-input">
                <label for="Username">Username </label>
                <input type="text" id="Username" name="Username" />
              </div>
              <div class="account-input">
                <label for="password">Password </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="********"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossorigin="anonymous"
      ></script>
    </body>
  );
};

export default Login;
