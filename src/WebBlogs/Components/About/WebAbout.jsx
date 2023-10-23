import React from 'react';
import './WebAbout.scss'; // Import the CSS file

export default function WebAbout() {
  return (
    <div className="about-us">
      <div className="about-us-content">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-description">
          Welcome to our blog services! We are dedicated to providing you with
          high-quality content and valuable information that will keep you
          informed and engaged.
        </p>
        <div className="mission-vision">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              Our mission is to deliver informative and engaging blog posts that
              cater to your interests and needs. We aim to be a valuable resource
              for knowledge and entertainment.
            </p>
          </div>
          <div className="vision">
            <h3>Our Vision</h3>
            <p>
              Our vision is to become a trusted and go-to source for insightful
              content. We strive to continually expand our offerings and create a
              thriving community of readers.
            </p>
          </div>
        </div>
        <h3>Our Team</h3>
        <p>
          Behind every great blog is a team of passionate and dedicated writers,
          researchers, and creatives. We are committed to bringing you the best
          content and ensuring that your reading experience is enjoyable and
          enriching.
        </p>
        <h3>Contact Us</h3>
        <p>
          We value your feedback and suggestions. If you have any questions or
          would like to get in touch with us, don't hesitate to contact us at
          [your email address].
        </p>
      </div>
    </div>
  );
}
