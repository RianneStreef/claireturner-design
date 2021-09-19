import addToMailchimp from "gatsby-plugin-mailchimp";
import React, { useState } from "react";

import "../styles/Subscribe.css";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function errorHandling(data) {
    // your error handling
  }

  const handleSubmit = () => {
    addToMailchimp(email).then((data) => {
      if (data.result === "error") {
        errorHandling(data);
      } else {
        setSubmitted(true);
      }
    });
  };

  return (
    <>
      {submitted ? (
        <form>
          <div className="subscribe-text">
            <h2>Successfully subscribed!</h2>
            <p>Thank your for your interest in my content.</p>
          </div>
        </form>
      ) : (
        <form>
          <div>
            <p className="subscribe-text">Subscribe to my newsletter.</p>
          </div>
          <div className="subscribe-input-container">
            <input
              type="email"
              name="email"
              id="mail"
              label="email-input"
              placeholder="Your e-mail address"
              onChange={(e) => setEmail(e.target.value)}
              className="subscribe-input"
            />
          </div>
          <div>
            <div className="button-container">
              <button
                className="subscribe-button"
                type="button"
                aria-label="Subscribe"
                onClick={() => handleSubmit()}
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

export default Subscribe;
