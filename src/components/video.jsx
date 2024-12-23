import React from 'react';

export const FloatingVideoButton = React.memo(({ showVideo, setShowVideo }) => {
  return (
    <>
      <button
        className="floating-video-btn"
        onClick={() => setShowVideo(!showVideo)}
      >
        <i className="fa fa-play"></i> Watch Demo
      </button>

      {showVideo && (
        <div className="video-modal">
          <div className="video-modal-overlay" onClick={() => setShowVideo(false)} />
          <div className="video-modal-content">
            <button
              className="close-video-btn"
              onClick={() => setShowVideo(false)}
            >
              ×
            </button>
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
        </div>
      )}
    </>
  );
});