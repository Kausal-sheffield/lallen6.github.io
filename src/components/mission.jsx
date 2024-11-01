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
        <div className="row icons animate-on-scroll">
          {props.data
            ? props.data.icons.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3" style={{ animationDelay: `${i * 0.2}s` }}>
                {" "}
                <i className={d.icon}></i>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
