import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style.css';

function Services() {
  const navigate = useNavigate();
  
  const services = [
    { id: 1, icon: '🏥', title: 'Online Medicine Delivery', description: 'Get your medicines delivered within 15 minutes across your city.' },
    { id: 2, icon: '👨‍⚕️', title: 'Doctor Booking', description: 'Book appointments with top doctors online for various specializations.' },
    { id: 3, icon: '🧪', title: 'Laboratory Tests', description: 'Schedule and get your health tests done from home, with fast results.' },
    { id: 4, icon: '🚑', title: 'Emergency Medical Assistance', description: 'Immediate support for emergencies, with on-call doctors and ambulances.' },
    { id: 5, icon: '💊', title: 'Health Supplements', description: 'Order a wide range of health supplements at competitive prices.' },
    { id: 6, icon: '📋', title: 'Prescription Upload', description: 'Easily upload your prescriptions and let us take care of the rest.' },
  ];

  const handleLearnMore = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <div className="services-container">
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <button
            className="learn-more-btn"
            onClick={() => handleLearnMore(service.id)}
          >
            Learn More
          </button>
        </div>
      ))}
    </div>
  );
}

export default Services;