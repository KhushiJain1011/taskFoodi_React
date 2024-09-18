import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

import PopularCategories from './components/PopularCategories';
import Footer from './components/Footer';
import SpecialDishes from './components/SpecialDishes';
import Testimonials from './components/Testimonials';
import Services from './components/Services';

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <PopularCategories />
      <SpecialDishes />
      <Testimonials />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
