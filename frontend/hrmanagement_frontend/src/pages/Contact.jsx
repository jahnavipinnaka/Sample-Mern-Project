
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);
  const [emailid, setEmailid] = useState("");
  const [colname, setColname] = useState("VFSTR");
  const [submitted, setSubmitted] = useState(false);

  // Form submission
  const RegisterForm = (event) => {
    event.preventDefault();

    console.log({
      name,
      age: Number(age),
      emailid,
      colname,
    });

    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="container py-5">
        <div className="row justify-content-center align-items-center g-4">

          {/* Left Information Section */}
          <div className="col-lg-5">
            <div className="contact-info">
              <span className="contact-badge">GET IN TOUCH</span>

              <h1>
                Let's Connect <span>Together.</span>
              </h1>

              <p className="contact-intro">
                Complete the form to register your details.
                Keep your information organized with our
                simple and user-friendly interface.
              </p>

              <div className="contact-info-item">
                <div className="contact-info-icon">✉</div>
                <div>
                  <h6>Email Support</h6>
                  <p>We are here to help you.</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">✓</div>
                <div>
                  <h6>Easy Registration</h6>
                  <p>Submit your details in a few simple steps.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="col-lg-7 col-xl-6">
            <div className="contact-form-card">
              <div className="contact-form-heading">
                <h2>Registration Form</h2>
                <p>Enter your details below.</p>
              </div>

              {submitted && (
                <div
                  className="alert alert-success"
                  role="status"
                >
                  Registration form submitted successfully!
                </div>
              )}

              <form onSubmit={RegisterForm}>
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    className="form-control contact-input"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      setSubmitted(false);
                    }}
                    placeholder="Enter your full name"
                    required
                    minLength={2}
                  />
                </div>

                {/* Age */}
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">
                    Age
                  </label>

                  <input
                    id="age"
                    type="number"
                    className="form-control contact-input"
                    value={age}
                    onChange={(event) => {
                      setAge(event.target.value);
                      setSubmitted(false);
                    }}
                    min="1"
                    max="120"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="emailid" className="form-label">
                    Email Address
                  </label>

                  <input
                    id="emailid"
                    type="email"
                    className="form-control contact-input"
                    value={emailid}
                    onChange={(event) => {
                      setEmailid(event.target.value);
                      setSubmitted(false);
                    }}
                    placeholder="you@example.com"
                    required
                  />
                </div>

                {/* College */}
                <div className="mb-4">
                  <label htmlFor="colname" className="form-label">
                    College Name
                  </label>

                  <input
                    id="colname"
                    type="text"
                    className="form-control contact-input"
                    value={colname}
                    onChange={(event) => {
                      setColname(event.target.value);
                      setSubmitted(false);
                    }}
                    placeholder="Enter your college name"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn contact-submit-btn w-100"
                >
                  Register Now →
                </button>
              </form>

              {/* Live Form Data */}
              <div className="contact-preview">
                <h5>Live Preview</h5>
                <p>
                  <strong>Name:</strong> {name || "Not entered"}
                </p>
                <p>
                  <strong>Age:</strong> {age || "Not entered"}
                </p>
                <p>
                  <strong>Email:</strong> {emailid || "Not entered"}
                </p>
                <p className="mb-0">
                  <strong>College:</strong> {colname || "Not entered"}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
