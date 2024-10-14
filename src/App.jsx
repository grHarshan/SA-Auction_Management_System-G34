import React from 'react';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/footer/footer'; 
import Allvehicles from './components/AllVehicles/Allvehicles'; 
import Profile from './components/profile/profile'; 
import Profile2 from './components/profile2/profile2'; 
import Profile3 from './components/profile3/profile3'; 
import Sell from './components/sell/sell'; 
import Productdetails from './components/productdetails/productdetails'; 
import Signin from './components/Signin/Signin';
import Login from './components/Login/Login';  
import Bid from './components/bid/bid'; 




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
          <Route path="/productdetails" element={<Productdetails />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/bid" element={<Bid />} />
          <Route path="*" element={<Navigate to="/Signin" />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer /> {/* Place the Footer outside the Routes */}
      </div>
    </BrowserRouter>
  );
};

export default App;