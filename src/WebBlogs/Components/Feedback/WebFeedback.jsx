import React, { useState } from 'react';
import './WebFeedback.scss'; // Import the CSS file

export default function WebFeedback() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted: ' + feedback);
  };

  const openWhatsAppChat = () => {
    const mobileNumber = '9902965742'; // Replace with the WhatsApp number you want to open a chat with
    const message = ''; // You can prepopulate a message if needed
    const url = `https://wa.me/${mobileNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, '_blank');
  };

  return (
    <div className="feedback">
      <h2 className="feedback-title">Give Us Feedback</h2>
      <p className="feedback-description">
        We value your feedback! Please let us know your thoughts, suggestions, or any issues you've encountered while using our blog.
      </p>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label style={{ fontSize: 30, textDecorationLine: 'underline', paddingBottom: 20 }} htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            rows="4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <button onClick={openWhatsAppChat} type="submit" className="submit-button">WhatsApp Contact</button>
    </div>
  );
}
