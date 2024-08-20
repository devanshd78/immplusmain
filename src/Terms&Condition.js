import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Style.css';

const TermsAndConditions = () => {
    return (
      <Container className="terms-container">
        <Row>
          <Col>
            <h1>Terms & Conditions</h1>
            <p>Last updated: [Date]</p>
  
            <section>
              <h2>1. Introduction</h2>
              <p>
                Welcome to Immplus Pvt. Ltd. These Terms & Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.
              </p>
            </section>
  
            <section>
              <h2>2. Use of Our Services</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services in any way that may cause damage or impair the availability or accessibility of our services.
              </p>
            </section>
  
            <section>
              <h2>3. User Accounts</h2>
              <p>
                To access certain features of our services, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
            </section>
  
            <section>
              <h2>4. Intellectual Property</h2>
              <p>
                All content and materials provided on our website, including but not limited to text, graphics, logos, and software, are the property of Immplus Pvt. Ltd. and are protected by intellectual property laws. You may not reproduce, distribute, or otherwise use our content without permission.
              </p>
            </section>
  
            <section>
              <h2>5. Limitation of Liability</h2>
              <p>
                Immplus Pvt. Ltd. will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of our services.
              </p>
            </section>
  
            <section>
              <h2>6. Changes to Terms</h2>
              <p>
                We may update these Terms & Conditions from time to time. We will notify you of any changes by posting the new Terms on our website. You are advised to review these Terms periodically for any changes.
              </p>
            </section>
  
            <section>
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us at <a href="mailto:contact@immplus.in" className="contact-link">contact@immplus.in</a>.
              </p>
            </section>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default TermsAndConditions;