import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/footer/footer'; 
import Allvehicles from './components/AllVehicles/Allvehicles'; 
import Profile from './components/profile/profile'; 
import Profile2 from './components/profile2/profile2'; 
import Profile3 from './components/profile3/profile3'; 
import Sell from './components/sell/sell'; 
import ProductDetails from './components/productdetails/productdetails'; 
import Signin from './components/Signin/Signin';
import Login from './components/Login/Login';  
import Bid from './components/bid/bid'; 
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs' ;
import Admindash from './components/admindash/admindash';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/allvehicles" element={<Allvehicles />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile2" element={<Profile2 />} />
          <Route path="/profile3" element={<Profile3 />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bid" element={<Bid />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/admindash" element={<Admindash />} />
          <Route path="*" element={<Navigate to="/signin" />} />
          
        </Routes>
        <Footer />  
      </div>
    </BrowserRouter>
  );
};

export default App;
