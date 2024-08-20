import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Style.css';

const PrivacyPolicy = () => {
    return (
      <div className="privacy-policy">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="page-title">Privacy Policy</h1>
              <p className="last-updated">Last updated: August 19, 2024</p>
  
              <section className="section">
                <h2>Introduction</h2>
                <p>
                  Welcome to Immplus Pvt. Ltd. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully.
                </p>
              </section>
  
              <section className="section">
                <h2>Information We Collect</h2>
                <p>
                  We may collect personal information such as your name, email address, phone number, and any other details you provide us when you use our services. We may also collect information about your usage of our services.
                </p>
              </section>
  
              <section className="section">
                <h2>How We Use Your Information</h2>
                <p>
                  We use your information to provide, maintain, and improve our services, communicate with you, and personalize your experience. We may also use your information for research and analysis purposes.
                </p>
              </section>
  
              <section className="section">
                <h2>How We Share Your Information</h2>
                <p>
                  We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and providing our services. We may also disclose your information if required by law or to protect our rights.
                </p>
              </section>
  
              <section className="section">
                <h2>Your Choices</h2>
                <p>
                  You may choose to opt-out of receiving promotional emails from us. You can also access and update your personal information by contacting us directly.
                </p>
              </section>
  
              <section className="section">
                <h2>Security</h2>
                <p>
                  We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is completely secure.
                </p>
              </section>
  
              <section className="section">
                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>
              </section>
  
              <section className="section">
                <h2>Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our practices, please contact us at <a href="mailto:contact@immplus.in">contact@immplus.in</a>.
                </p>
              </section>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  
  export default PrivacyPolicy;