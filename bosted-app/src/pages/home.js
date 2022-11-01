const Home = () => {
  return (
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
     
      <div class="content-container">
        <div class="home-content">
          <div class="home-top">
            <div class="home-info">
              <img
                src="images/bosted-tekst.svg"
                alt="Dictionary definition of Bosted"
              />
            </div>
            <div class="home-pic">
              <img
                src="images/rental-property.jpg"
                alt="Rental property along the coast"
              />
            </div>
          </div>
          <div clas="home-middle"></div>
          <div clas="home-bottom"></div>
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

export default Home;
