// Modified Mission component
export const Mission = (props) => {
  return (
    <div id="features">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Our Mission</h2>
        </div>
        <div className="features-text">
          <p>{props.data ? props.data.paragraph : "Loading"}</p>
        </div>

        {/* Key stages section */}
        <div className="row icons animate-on-scroll">
          {props.data?.icons.map((d, i) => (
            <div key={`${d.title}-${i}`} className="col-xs-6 col-md-4" style={{ animationDelay: `${i * 0.2}s` }}>
              <i className={d.icon}></i>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>

        {/* Industries section */}
        <div id="industry-section" className="industries-section">
          <h4 className="industries-title">
            {props.data ? props.data.industryCall : "Loading"}
          </h4>
          <div className="industries-grid">
            {props.data?.industries.map((d, i) => (
              <div key={`${d.title}-${i}`} className="industry-card">
                <i className={d.icon}></i>
                <h4>{d.title}</h4>
              </div>
            ))}
          </div>
          <div className="survey-button-container">
            <a
              href="https://research.typeform.com/to/x9D23nqZ"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-custom survey-button"
            >
              Take Our Industry Survey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};