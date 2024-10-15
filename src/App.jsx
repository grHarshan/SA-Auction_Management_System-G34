import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/footer/footer'; 
import Allvehicles from './components/AllVehicles/Allvehicles'; 
import Profile from './components/profile/profile'; 
import Profile2 from './components/profile2/profile2'; 
import Profile3 from './components/profile3/profile3'; 
import Sell from './components/sell/sell'; 




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
          <Route path="/ContactUs" element={< ContactUs/>} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer /> {/* Place the Footer outside the Routes */}
      </div>
    </BrowserRouter>
  );
};

export default App;