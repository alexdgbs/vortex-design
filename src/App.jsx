import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TestimonialsPage from './pages/TestimonialsPage';
import FeaturesPage from './pages/FeaturesPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen flex flex-col bg-white p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testimonios" element={<TestimonialsPage />} />
          <Route path="/features" element={<FeaturesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
