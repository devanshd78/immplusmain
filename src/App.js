import React from 'react';
import AppNavbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import DoctorBooking from './pages/DoctorBooking';
import LabTests from './pages/LabTest';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './Terms&Condition';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctor-booking" element={<DoctorBooking />} />
        <Route path="/lab-tests" element={<LabTests />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
