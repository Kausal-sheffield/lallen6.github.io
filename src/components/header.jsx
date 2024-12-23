import React, { useState } from 'react';

export const Header = (props) => {
  const [showVideo, setShowVideo] = useState(false);

  const handleLearnMore = (e) => {
    e.preventDefault();
    setShowVideo(!showVideo);
    // Smooth scroll to video section if showing
    if (!showVideo) {
      document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="intro-text">
                <div className="col-md-8 col-md-offset-1 intro-text">
                  <h1>
                    <div className="font-face-qu">
                      {props.data ? props.data.title : "Loading"}
                    </div>
                    <span></span>
                  </h1>
                  <p className="font-face-ql">
                    {props.data ? props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="#video-section"
                    className="btn btn-custom btn-lg page-scroll"
                    onClick={handleLearnMore}
                  >
                    Click here to watch a video on our technology
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header >
      {showVideo && (
        <div id="video-section" className="video-container">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/E3uqV3WuI74?si=kejXa0XMkEcTB47I"
              title="Kausal Technology Explainer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )
      }
    </>


  );
};
