// import { useState } from "react";

// export const Contact = (props) => {
//   const [waitlistEmail, setWaitlistEmail] = useState("");
//   const [submitStatus, setSubmitStatus] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleWaitlistSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitStatus("");
//     setIsSubmitting(true);

//     // Create a unique callback name
//     const callbackName = 'jsonpCallback' + Date.now();

//     // Create script element
//     const script = document.createElement('script');
//     const scriptURL = 'https://script.google.com/macros/s/AKfycbwolUhr0Mf6IfEiV3YArvjojczFSU4PGwh9TB_pTLyR59ggMRBNjfQUcgOnSz-32I9J6Q/exec'; // Your Google Apps Script URL

//     // Create promise to handle the JSONP response
//     const jsonpPromise = new Promise((resolve, reject) => {
//       // Define callback function
//       window[callbackName] = (response) => {
//         resolve(response);
//         // Cleanup
//         delete window[callbackName];
//         document.body.removeChild(script);
//       };

//       // Setup script error handling
//       script.onerror = () => {
//         reject(new Error('Script load failed'));
//         // Cleanup
//         delete window[callbackName];
//         document.body.removeChild(script);
//       };
//     });

//     // Set script source with callback parameter
//     script.src = `${scriptURL}?callback=${callbackName}&email=${encodeURIComponent(waitlistEmail)}`;

//     // Add script to document
//     document.body.appendChild(script);

//     try {
//       // Wait for response
//       const response = await jsonpPromise;

//       if (response.result === 'success') {
//         setSubmitStatus("Thank you for joining our waitlist!");
//         setWaitlistEmail('');
//       } else if (response.result === 'duplicate') {
//         setSubmitStatus("This email is already registered!");
//       } else {
//         setSubmitStatus("There was an error. Please try again.");
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setSubmitStatus("There was an error. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       <div id="contact">
//         <div className="container">
//           <div className="col-md-8">
//             <div className="row">
//               <div className="section-title">
//                 <h2>Join Our Waitlist</h2>
//                 <p>
//                   Be the first to know when we launch! Sign up below to stay updated
//                   on our latest developments and early access opportunities.
//                 </p>
//               </div>
//               <form className="waitlist-form" onSubmit={handleWaitlistSubmit}>
//                 <div className="form-group">
//                   <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Enter your email"
//                     value={waitlistEmail}
//                     onChange={(e) => setWaitlistEmail(e.target.value)}
//                     disabled={isSubmitting}
//                     required
//                   />
//                   {submitStatus && (
//                     <p className={`status-message ${submitStatus.includes("Thank you") ? "success" : "error"
//                       }`}>
//                       {submitStatus}
//                     </p>
//                   )}
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-custom btn-lg"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Signing up..." : "Sign Up for Waitlist"}
//                 </button>
//               </form>
//             </div>
//           </div>
// <div className="col-md-3 col-md-offset-1 contact-info">
//   <div className="contact-item">
//     <h3>Contact Info</h3>
//     <p>
//       <span>
//         <i className="fa fa-map-marker"></i> Address
//       </span>
//       {props.data ? props.data.address : "loading"}
//     </p>
//   </div>
//   <div className="contact-item">
//     <p>
//       <span>
//         <i className="fa fa-envelope-o"></i> Email
//       </span>{" "}
//       {props.data ? props.data.email : "loading"}
//     </p>
//   </div>
// </div>
// <div className="col-md-12">
//   <div className="row">
//     <div className="social">
//       <ul>
//         <li>
//           <a
//             href={props.data ? props.data.linkedin : "/"}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fa fa-linkedin"></i>
//           </a>
//         </li>
//         <li>
//           <a
//             href={props.data ? props.data.researchgate : "/"}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <i className="fab fa-researchgate"></i>
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>
//   </div>
// </div>
//       <div id="footer">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4">
//               <p>&copy; 2024 Kausal Spin-out University of Sheffield</p>
//             </div>
//             <div className="col-md-8">
//               <div className="footer-logos">
//                 <img
//                   src="img/footer/uos-logo.png"
//                   alt="University of Sheffield"
//                   className="footer-logo"
//                 />
//                 <img
//                   src="img/footer/icure-logo.png"
//                   alt="ICure Programme"
//                   className="footer-logo"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import { useState } from "react";

export const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    source: "Select an option", // Default value matches first option
  });
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sourceOptions = [
    "Select an option",
    "LinkedIn",
    "University",
    "Word of Mouth",
    "Search Engine",
    "Exhibition or Tradeshow",
    "Other"
  ];

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();

    // Validate source selection
    if (formData.source === "Select an option") {
      setSubmitStatus("Please select where you heard about us");
      return;
    }

    setSubmitStatus("");
    setIsSubmitting(true);

    const callbackName = 'jsonpCallback' + Date.now();
    const script = document.createElement('script');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyJjgWJnc72PBIXvek0BSaKV0-oC0f-WOzzIJCRrCVS9ExdmwabGHlz2o5AZS1Ne9fzOg/exec'; // Replace with your actual script URL

    const jsonpPromise = new Promise((resolve, reject) => {
      window[callbackName] = (response) => {
        resolve(response);
        delete window[callbackName];
        document.body.removeChild(script);
      };

      script.onerror = () => {
        reject(new Error('Script load failed'));
        delete window[callbackName];
        document.body.removeChild(script);
      };
    });

    const params = new URLSearchParams({
      callback: callbackName,
      email: formData.email.trim(),
      name: formData.name.trim(),
      source: formData.source
    });

    script.src = `${scriptURL}?${params.toString()}`;
    document.body.appendChild(script);

    try {
      const response = await jsonpPromise;

      if (response.result === 'success') {
        setSubmitStatus("Thank you for joining our waitlist!");
        setFormData({
          name: "",
          email: "",
          source: "Select an option"
        });
      } else if (response.result === 'duplicate') {
        setSubmitStatus("This email is already registered!");
      } else {
        setSubmitStatus("There was an error. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <div id="contact">
        <div className="about-container">
          <div className="row">
            <div className="col-md-8">
              <div className="section-title">
                <h2>Join Our Waitlist</h2>
                <p>
                  Be the first to know when we launch! Sign up below to stay updated
                  on our latest developments and early access opportunities.
                </p>
              </div>
              <form className="waitlist-form" onSubmit={handleWaitlistSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address:</label>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="source">How did you hear about Kausal?</label>
                  <select
                    className="form-control"
                    name="source"
                    value={formData.source}
                    placeholder="How did you hear about us?"
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                  >
                    {sourceOptions.map((option, index) => (
                      <option
                        key={index}
                        value={option}
                        disabled={index === 0}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                {submitStatus && (
                  <div className={`status-message ${submitStatus.includes("Thank you") ? "success" : "error"
                    }`}>
                    {submitStatus}
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-custom btn-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing up..." : "Sign Up for Waitlist"}
                </button>
              </form>
            </div>

            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={props.data ? props.data.linkedin : "/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href={props.data ? props.data.researchgate : "/"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-researchgate"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >

      <footer id="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logos">
              <img
                src="img/footer/uos-logo-2.png"
                alt="University of Sheffield"
                className="footer-logo"
              />
              <img
                src="img/footer/icure-logo.png"
                alt="ICure Programme"
                className="footer-logo"
              />
            </div>
            <div className="footer-text">
              <p color="#070707">&copy; 2024 Kausal Spin-out University of Sheffield</p>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
};