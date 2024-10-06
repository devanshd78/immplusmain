import React from 'react';
import '../Style.css';

function About() {
  return (
    <div className="about-container">
      {/* Company Overview */}
      <section className="company-overview">
        <h1>About Immplus Pvt. Ltd.</h1>
        <p>
          Immplus is an innovative healthcare company that provides online medicine delivery, doctor booking, and laboratory test services. Our mission is to bring healthcare to your doorstep, fast and reliable.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision">
        <h2>Our Mission</h2>
        <p>We aim to deliver healthcare services efficiently, saving time and improving the well-being of people in India by making healthcare accessible to all.</p>

        <h2>Our Vision</h2>
        <p>Our vision is to be a trusted and reliable healthcare partner for millions, revolutionizing how people access health services and medications.</p>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Immplus Pvt. Ltd. was born out of a need to provide faster access to medicine and health services. Founded in 2022 by a group of healthcare enthusiasts, we recognized the challenges many people face in getting timely medical support. With a lack of startup experience but a strong vision, we embarked on this journey, initially with only a handful of clients. Today, we serve thousands of satisfied customers across India.
        </p>
      </section>

      {/* Team Members */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="team-member1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="team-member2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>CTO & Co-Founder</p>
          </div>
          <div className="team-member">
            <img src="team-member3.jpg" alt="Team Member 3" />
            <h3>Dr. Emily Clark</h3>
            <p>Head of Medical Services</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Customer First:</strong> We prioritize our customers' needs and work tirelessly to meet their expectations.</li>
          <li><strong>Reliability:</strong> We deliver on our promises, ensuring that our services are fast and trustworthy.</li>
          <li><strong>Innovation:</strong> We continuously evolve, embracing technology and innovation to improve healthcare delivery.</li>
          <li><strong>Integrity:</strong> We operate with the utmost integrity, ensuring ethical practices in all our dealings.</li>
        </ul>
      </section>

      {/* Milestones */}
      <section className="milestones">
        <h2>Our Journey</h2>
        <div className="milestone-timeline">
          <div className="milestone">
            <h3>2022</h3>
            <p>Immplus was founded and launched its first online medicine delivery service.</p>
          </div>
          <div className="milestone">
            <h3>2023</h3>
            <p>We expanded our services to include doctor booking and lab tests.</p>
          </div>
          <div className="milestone">
            <h3>2024</h3>
            <p>Immplus reached over 1 million users across India.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;