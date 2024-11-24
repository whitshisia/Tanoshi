import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FeatureList from './components/FeatureList'; 
import ServiceDetail from './components/ServiceDetail';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Services from './pages/Products';
function App() {
  return (
    
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/" element={<FeatureList />} />
      <Route path="/services/:serviceId" element={<ServiceDetail />} />
      <Route path="/services" element={<Services />} /> 
        {/* <Route path="/services/family-events" element={<FeatureDetails />} />
        <Route path="/services/friends" element={<FeatureDetails />} />
        <Route path="/services/group" element={<FeatureDetails />} />
        <Route path="/services/retreats" element={<FeatureDetails />} />
        <Route path="/services/nature" element={<FeatureDetails />} /> */}
        <Route path="/whoweare" element={<WhoWeAre />} />
        <Route path="/our-clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <FeatureList /> */}
      <Footer />
    </div>
    </Router>
  );
}

export default App;
