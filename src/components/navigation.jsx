export const Navigation = ({ setShowVideo }) => {

  const handleVideoClick = (e) => {
    e.preventDefault();
    setShowVideo(true)
  }
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <div className="row page-scroll" href="#page-top">
            <a className="navbar-brand page-scroll navbar-logo" href="#page-top">
              Kausal
            </a>
            <img src="img/logos/logo_steel_blue.png" className="navbar-logo" alt="Kausal Logo" />
            <div className="sponsors-container">
              <span className="sponsor-text">Sponsored by:</span>
              <div className="sponsor-logos">
                <img
                  src="img/footer/uos-logo-2.png"
                  alt="University of Sheffield"
                  className="navbar-logo"
                  style={{ width: "100px" }}
                />
                <img
                  src="img/footer/icure-logo.png"
                  alt="ICure Programme"
                  className="navbar-logo"
                  style={{ width: "150px" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#video" className="page-scroll" onClick={handleVideoClick}>
                Video
              </a>
            </li>
            <li>
              <a className="page-scroll" href="https://research.typeform.com/to/x9D23nqZ">
                Survey
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Mission
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Benefits
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
