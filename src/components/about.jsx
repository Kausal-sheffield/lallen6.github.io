export const About = (props) => {

  return (
    <div id="about">
      <div className="about-container">
        <div className="about-content">
          <img
            src="img/about.jpg"
            className="about-image"
            alt="petro_chem_image"
            loading="lazy"
          />
          <div className="about-text">
            <h2>Reducing Your Maintenance Costs</h2>
            <p>{props.data ? props.data.paragraph : "loading..."}</p>
          </div>
          <div className="about-text">
            <h3>What makes Kausal Different?</h3>
            <div className="offerings-list">
              <ul>
                {props.data
                  ? props.data.Why.map((d, i) => (
                    <li key={`${d}-${i}`}>
                      {d}
                    </li>
                  ))
                  : "loading"}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};