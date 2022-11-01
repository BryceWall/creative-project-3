const About = () => {
  return (
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
      
      <div class="content-container">
        <div class="about-content">
          <div class="about-info">
            <div class="peace-of-mind">
              <div class="about-images">
                <img
                  src="images/clouds.svg"
                  alt="Blue clouds representing peace of mind"
                />
              </div>
              <div class="about-text">
                <h5>Peace of Mind</h5>
                <p>
                  With bosted, landlords need not worry about who they are
                  renting to or <em>if</em> the tennants will hold up thir end
                  of the contract.
                </p>
              </div>
            </div>
            <div class="security">
              <div class="about-text">
                <h5>Secure</h5>
                <p>
                  Bad renters will receive bad ratings and their rental history
                  will show up from all their past landlords.
                </p>
              </div>
              <div class="about-images">
                <img
                  src="images/lock.svg"
                  alt="Lock representing security"
                />
              </div>
            </div>
            <div class="streamlined">
              <div class="about-images">
                <img
                  src="images/gears.svg"
                  alt="Gears representing streamlined process"
                />
              </div>
              <div class="about-text">
                <h5>Streamlined</h5>
                <p>
                  Bosted is an{" "}
                  <em>
                    <strong>all-inclusive</strong>
                  </em>{" "}
                  rental management system with all the rating perks of Airbnb
                  and the simplicity of your worn out notebook.
                </p>
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

export default About;
