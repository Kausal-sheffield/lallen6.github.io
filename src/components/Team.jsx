export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>{props.data ? props.data.paragraph : "Loading..."}</p>
        </div>
        <div className="images">
          {props.data
            ? props.data.members.map((d, i) => (
              <div
                key={`${d.name}-${i}`}
                className="col-lg-6 col-md-6 col-sm-6"
              >
                <div className="thumbnail">
                  <a href={d.link}>
                    <img src={d.img} alt="..." href={d.link} />
                  </a>
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p style={{ textAlign: 'center' }}>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
