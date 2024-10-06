import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import DoctorCarousel from '../Assets/Images/DoctorMac.png'
import Delivery from '../Assets/Images/DeliveryMac.png'
import LabTest from '../Assets/Images/LabTestMac.png'
import EmergencyMedical from '../Assets/Images/EmergencyHealthcare.jpg'
import HealthSupplement from '../Assets/Images/HealthSupplement.png'
import Prescription from '../Assets/Images/Prescription.png'
import LabTest1 from '../Assets/Images/LabTest.jpg'
import HomeImage from '../Assets/Images/HomeIphone.png'
import AppStore from '../Assets/Images/AppStore.png'
import PlayStore from '../Assets/Images/Playstore.png'
import Medicinedelivery from '../Assets/Images/Medicine Delivery.png';
import LabTestService from '../Assets/Images/LabTestService.png'
import DoctorAppointment from '../Assets/Images/DoctorAppointment.jpg'

import { useNavigate } from 'react-router-dom';
function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 cards at a time on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Container fluid>
      <header>
        <meta name="description" content="Immplus Pvt. Ltd. offers fast and reliable medicine delivery, doctor appointment booking, and accurate lab tests. Experience top-notch healthcare services right at your doorstep." />
        <meta name="keywords" content="medicine delivery, doctor appointments, lab tests, healthcare, teleconsultation, medical services, immplus, Immplus" />
        <title>Immplus Pvt. Ltd. - Fast Medicine Delivery, Doctor Appointments, and Lab Tests</title>
      </header>
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start">
          <Carousel activeIndex={activeIndex} onSelect={handleSelect} controls={false} indicators={false}>
            <Carousel.Item>
              <div className="carousel-content">
                <h2>Fast & Reliable Medicine Delivery</h2>
                <p>Get your medicines delivered to your doorstep in just 15 minutes. Fast, safe, and hassle-free.</p>
                <Button variant="btn btn-outline-success">Order Now</Button>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-content">
                <h2>Book Doctors Anytime, Anywhere</h2>
                <p>Schedule an appointment with a qualified doctor in minutes. Access teleconsultations and in-clinic visits at your convenience.</p>
                <Button variant="warning">Book Appointment</Button>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-content">
                <h2>Get Accurate Lab Tests at Home</h2>
                <p>Schedule and receive lab tests from the comfort of your home. Get accurate results quickly and easily.</p>
                <Button variant="light">Schedule Test</Button>
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6}>
          <Carousel activeIndex={activeIndex} onSelect={handleSelect} controls={false} indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Delivery}
                alt="Image of quick medicine delivery"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={DoctorCarousel}
                alt="Image of doctor booking services"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={LabTest}
                alt="Image of lab test services"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="features-section align-items-center my-5">
        <Col md={6} className="text-center text-md-start">
          <h2 style={{ color: '#5c9a41' }}>Experience the Best in Healthcare</h2>
          <p style={{ color: '#333' }}>
            At Immplus Pvt. Ltd., we are dedicated to transforming your healthcare experience. Our mobile application provides:
          </p>
          <ul style={{ color: '#333' }}>
            <li><strong style={{ color: '#5c9a41' }}>Medicine Delivery:</strong> Get your medicines delivered within 15 minutes, ensuring you never miss a dose.</li>
            <li><strong style={{ color: '#5c9a41' }}>Doctor Appointments:</strong> Book appointments with top doctors effortlessly and access teleconsultations anytime.</li>
            <li><strong style={{ color: '#5c9a41' }}>Lab Tests:</strong> Schedule lab tests and receive accurate results from the comfort of your home.</li>
          </ul>
          <p style={{ color: '#333' }}>Download our app to access all these services and more!</p>
          <Row className="my-4">
            <Col sm={6} className="d-flex justify-content-center justify-content-sm-start mb-3 mb-sm-0">
              <Card className="app-card">
                <Card.Img variant="top" src={PlayStore} alt="Google Play Store logo" />
                <Card.Body>
                  <Card.Title>Google Play</Card.Title>
                  <Card.Text>
                    Download our app from the Google Play Store for Android devices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6} className="d-flex justify-content-center justify-content-sm-start">
              <Card className="app-card">
                <Card.Img variant="top" src={AppStore} alt="Apple App Store logo" />
                <Card.Body>
                  <Card.Title>App Store</Card.Title>
                  <Card.Text>
                    Download our app from the Apple App Store for iOS devices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={6} className="text-center">
          <img src={HomeImage} alt="Immplus App on Smartphone" className="img-fluid" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={12} className="text-center">
          <h2 style={{ color: '#5c9a41' }}>Our Services</h2>
          <p style={{ color: '#333' }}>Discover the range of services we offer through our user-friendly app:</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Slider {...settings} className="service-slider">
          <div className="card-wrapper">
            <Card className="service-card">
              <Card.Img variant="top" src={Medicinedelivery} alt="Medicine Delivery" className="service-image" />
              <Card.Body>
                <Card.Title>Medicine Delivery</Card.Title>
                <Card.Text>
                  Get your medicines delivered to your doorstep in just 15 minutes. Our service ensures timely and reliable delivery.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="card-wrapper">
            <Card className="service-card">
              <Card.Img variant="top" src={DoctorAppointment} alt="Doctor Appointments" className="service-image" />
              <Card.Body>
                <Card.Title>Doctor Appointments</Card.Title>
                <Card.Text>
                  Schedule and manage appointments with qualified doctors seamlessly. Access both teleconsultations and in-clinic visits.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="card-wrapper">
            <Card className="service-card">
              <Card.Img variant="top" src={LabTest1} alt="Lab Tests" className="service-image" />
              <Card.Body>
                <Card.Title>Lab Tests</Card.Title>
                <Card.Text>
                  Arrange lab tests from the comfort of your home and receive accurate results quickly. Convenience and accuracy at your fingertips.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          {/* Add more cards for additional services */}
          <div className="card-wrapper">
            <Card className="service-card">
              <Card.Img variant="top" src={EmergencyMedical} alt="Healthcare Support" className="service-image" />
              <Card.Body>
                <Card.Title>Emergency Medical Assistance</Card.Title>
                <Card.Text>
                  24/7 Immediate support for emergencies, with on-call doctors and ambulances.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="card-wrapper">
            <Card className="service-card">
              <Card.Img variant="top" src={HealthSupplement} alt="Pharmacy Locator" className="service-image" />
              <Card.Body>
                <Card.Title>Health Supplements</Card.Title>
                <Card.Text>
                  Order a wide range of health supplements at competitive prices.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="card-wrapper">
            <Card className="service-card">
              <Card.Img variant="top" src={Prescription} alt="Health Reminders" className="service-image" />
              <Card.Body>
                <Card.Title>Prescription Upload</Card.Title>
                <Card.Text>
                  Easily upload your prescriptions and let us take care of the rest.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Slider>
      </Row>
      <footer className="footer">
        <Container fluid className="footer-container">
          <Row className="justify-content-between align-items-flex-start">
            <Col md={4} className="footer-about">
              <h5>About Immplus</h5>
              <p>
                Immplus Pvt. Ltd. is your go-to solution for online medicine delivery, doctor appointment bookings, and lab test services. We ensure quality healthcare delivered at your convenience.
              </p>
              <p>&copy; 2024 Immplus Pvt. Ltd. All rights reserved.</p>
            </Col>

            <Col md={4} className="footer-links">
              <h5>Quick Links</h5>
              <ul>
                <li><button onClick={() => handleNavigation('/')}>Home</button></li>
                <li><button onClick={() => handleNavigation('/services')}>Services</button></li>
                <li><button onClick={() => handleNavigation('/about-us')}>About Us</button></li>
                <li><button onClick={() => handleNavigation('/contact')}>Contact</button></li>
                <li><button onClick={() => handleNavigation('/policy')}>Privacy Policy</button></li>
                <li><button onClick={() => handleNavigation('/terms-conditions')}>Terms & Conditions</button></li>
              </ul>
            </Col>

            <Col md={4} className="footer-social">
              <h5>Follow Us</h5>
              <ul className="social-icons">
                <li>
                  <a href="https://www.facebook.com/people/Immplus/61564480852165/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/Immplus" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/immplus/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/immplus.co/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
              <p>
                <a href="mailto:contact@immplus.in" className="contact-link">
                  <i className="fas fa-envelope"></i> contact@immplus.in
                </a><br />
                <a href="tel:+918882877457" className="contact-link">
                  <i className="fas fa-phone"></i> +91 8882877457
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Container>
  );
}

export default Home;

