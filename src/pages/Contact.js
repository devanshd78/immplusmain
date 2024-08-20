import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../Style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Container className="contact-container">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <h1 className="contact-heading">Contact Us</h1>
          <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                required
              />
            </Form.Group>

            <Form.Group controlId="formReason">
              <Form.Label>Specify Reason to Contact</Form.Label>
              <Form.Control
                as="textarea"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows={4}
                placeholder="Enter the reason for contact"
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" className="submit-button">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-center">
        <Col md={6} lg={4}>
          <a href="tel:+918882877457" className="contact-card-link">
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Call Now</Card.Title>
                <Card.Text>
                  <i className="fas fa-phone-alt"></i> +91 8882877457
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
        <Col md={6} lg={4}>
          <a href="mailto:contact@immplus.in" className="contact-card-link">
            <Card className="contact-card">
              <Card.Body>
                <Card.Title>Email Us</Card.Title>
                <Card.Text>
                  <i className="fas fa-envelope" ></i> contact@immplus.in
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;