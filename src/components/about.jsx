export const About = (props) => {
  return (
    <div id="about">
      <div className="about-container">
        <div className="section-title">
          <h2>Benefits of Kausal</h2>
        </div>
        <div className="pdf-container">
          {/* Replace this with your static image */}
          <div className="">
            <img
              src="pdf/kausal_page-0001.jpg" // Update this path to your actual image
              alt="Kausal Benefits"
            />
            <a
              href="/pdf/kausal.pdf"
              download="kausal.pdf"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Download PDF
            </a>
          </div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>What makes Kausal Different?</h3>
            <div className="offerings-list">
              <ul>
                {props.data
                  ? props.data.Why.map((d, i) => (
                    <li key={`${d}-${i}`}>{d}</li>
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