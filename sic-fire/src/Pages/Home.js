import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carrousel';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

import '../assets/styles/Navbar.css';

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Carousel />
        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
};

export default Home;
