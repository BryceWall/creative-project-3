import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="navbar-brand">
          <div class="navbar-img">
            <img src="../images/bosted.svg" alt="blue bosted logo" />
          </div>
          <div class="logo-title">
            <h1>bosted</h1>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <ul>
              <li class="nav-item" >
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/properties">Properties</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/map">Cost of Living</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <div class = "footer">
        <a href="https://github.com/BryceWall/creative-project-3.git">Bryce Wall and Michal Stone</a>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
