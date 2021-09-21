import React from "react";

import "../styles/Contact.css";

function Contact() {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <div className="contact">
        <div className="contact-form">
          <form name="contact" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p className="form-items">
              <label htmlFor="name">Name:</label> <br />
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                required
              />
            </p>
            <p className="form-items">
              <label htmlFor="email">Email:</label> <br />
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
            <p className="form-items">
              <label htmlFor="message">Message:</label> <br />
              <textarea
                id="message"
                name="message"
                required
                rows="8"
              ></textarea>
            </p>
            <div className="button-container">
              <button
                className="custom_button"
                type="submit"
                value="Submit message"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <p className="contact-form-text">
          I am really happy to listen to your ideas for personalised presents,
          so please don't hesitate to contact me for any special orders and
          prices. I will try my hardest to help you produce the perfect gift.{" "}
        </p>
      </div>
    </div>
  );
}

export default Contact;
