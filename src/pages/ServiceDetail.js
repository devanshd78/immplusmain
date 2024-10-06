import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../Style.css';

// Importing images
import EmergencyMedical from '../Assets/Images/EmergencyHealthcare.jpg';
import HealthSupplement from '../Assets/Images/HealthSupplement.png';
import Prescription from '../Assets/Images/Prescription.png';
import LabTest1 from '../Assets/Images/LabTest.jpg';
import DoctorAppointment from '../Assets/Images/DoctorAppointment.jpg';
import Medicinedelivery from '../Assets/Images/Medicine Delivery.png';

function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Detailed service information
  const serviceDetails = {
    1: {
      title: 'Online Medicine Delivery',
      description: 'Our online medicine delivery service ensures that you get your medicines delivered to your doorstep within 15 minutes. We partner with local pharmacies to bring you the best deals and fastest delivery.',
      features: [
        'Fast delivery within 15 minutes',
        'Wide network of local pharmacies',
        'Easy online ordering'
      ],
      image: Medicinedelivery,
      contact: 'Call us at +91 88828-77457 for urgent requests',
    },
    2: {
      title: 'Doctor Booking',
      description: 'Book appointments with top doctors across various specializations. Our platform allows you to schedule consultations, view doctor profiles, and get reminders for your appointments.',
      features: [
        'Book appointments online',
        'Consult with top specialists',
        'Receive appointment reminders'
      ],
      image: DoctorAppointment,
      contact: 'For queries, call +91 88828-77457',
    },
    3: {
      title: 'Laboratory Tests',
      description: 'Schedule and get your laboratory tests done from the comfort of your home. We offer a wide range of tests with fast results and a reliable network of labs.',
      features: [
        'Home sample collection',
        'Comprehensive test options',
        'Quick results'
      ],
      image: LabTest1,
      contact: 'Reach out at +91 88828-77457 for more info',
    },
    4: {
      title: 'Emergency Medical Assistance',
      description: 'Get immediate support during emergencies. Our service includes on-call doctors and ambulances to provide timely medical assistance when you need it the most.',
      features: [
        '24/7 emergency support',
        'On-call doctors and ambulances',
        'Rapid response team'
      ],
      image: EmergencyMedical,
      contact: 'In emergencies, call +91 88828-77457 immediately',
    },
    5: {
      title: 'Health Supplements',
      description: 'Browse through a wide range of health supplements including vitamins, minerals, and dietary products. We offer competitive prices and high-quality supplements to meet your health needs.',
      features: [
        'Extensive range of supplements',
        'Competitive pricing',
        'Quality assurance'
      ],
      image: HealthSupplement,
      contact: 'For orders, call +91 88828-77457',
    },
    6: {
      title: 'Prescription Upload',
      description: 'Easily upload your prescriptions and let us handle the rest. Our service ensures that your prescribed medicines are delivered accurately and promptly.',
      features: [
        'Simple prescription upload',
        'Accurate medicine delivery',
        'Secure handling of prescriptions'
      ],
      image: Prescription,
      contact: 'For support, call +91 88828-77457',
    },
  };

  const service = serviceDetails[id];

  // Navigate back to the previous page
  const handleBackClick = () => {
    navigate(-1);
  };

  if (!service) {
    return (
      <div className="service-detail-container">
        <h2>Service Not Found</h2>
        <p>The service you're looking for does not exist or has been removed.</p>
        <button onClick={handleBackClick} className="back-button">Go Back</button>
      </div>
    );
  }

  return (
    <div className="service-detail-container">
      <h1>{service.title}</h1>
      <div className="service-detail-content">
        <img src={service.image} alt={service.title} className="service-detail-image" />
        <p>{service.description}</p>
        <div className="service-features">
          <h3>Key Features:</h3>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="service-contact">
          <p>{service.contact}</p>
        </div>
      </div>
      <button onClick={handleBackClick} className="back-button">Go Back</button>
    </div>
  );
}

export default ServiceDetail;
