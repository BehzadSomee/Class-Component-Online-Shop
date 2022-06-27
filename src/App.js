import React, { Component } from 'react';
import { Route , Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import DetailsPage from './components/DetailsPage';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
        <Route path="/products" element={<Products/>} />
        <Route path="/Aboutus" element={<AboutUs/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path='/products/:id' element={<DetailsPage />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;