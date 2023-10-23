import React from 'react';
import './WebContact.scss'; // Import the CSS file

export default function WebContact() {
  return (
    <div className="contact">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        We appreciate your interest in our professional blogs. Please feel free
        to get in touch with us for any inquiries, collaborations, or feedback.
      </p>
      <div className="contact-info">
        <div className="contact-method">
          <h3>Contact Information</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="contact-form">
          <h3>Contact Form</h3>
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
