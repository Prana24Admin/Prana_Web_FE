import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './components/Arrivals/Register'
import Home from './components/Home/index'
import Login from './components/Arrivals/Login'
import Forgot from './components/Arrivals/forgot'
import OTP from './components/Arrivals/otp'
import PasswordChange from './components/Arrivals/passwordchange'
import AboutIn from './components/About/index'
import Contact from './components/contact/index'
import Career from './components/career/index'
import OfferScreen from './components/Offers/index'
import Payment from './components/Offers/payment'
import Medicine from './components/Offers/medicine';
import Diagnostic from './components/Offers/disgnostic';
import HealthCare from './components/Offers/healthCare';
import Prescription from './components/Home/innerHome/prescription'
import InnerMed from './components/Inner/Medicine/index'
import InnerAyur from './components/Inner/Ayurveda/index'
import Doctor from './components/Doctor/index'
import InnerDoctor from './components/Doctor/inner/index'
import FindDoctor from './components/Doctor/findDoctor/index';
import Appointment from './components/Doctor/findDoctor/appointment';
import InnerLab from './components/Lab/index';
import HealthCareIndex from './components/HealthCare/index'
import HealthBlogIndex from './components/HealthBlog/index'
import CartIndex from './components/cart/index';
const App = () =>{
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/Password" element={<PasswordChange />} />
          <Route path="/about" element={<AboutIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/offers" element={<OfferScreen />} />
          <Route path="/offers/payment" element={<Payment />} />
          <Route path="/offers/medicine" element={<Medicine />} />
          <Route path="/offers/diagnostic" element={<Diagnostic />} />
          <Route path="/offers/healthCare" element={<HealthCare />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/inner/innerMed" element={<InnerMed />} />
          <Route path="/inner/innerAyur" element={<InnerAyur />} />
          <Route path="/inner/doctor" element={<Doctor />} />
          <Route path="/inner/lab" element={<InnerLab />} />
          <Route path="/inner/doctor/consultant" element={<InnerDoctor />} />
          <Route path="/inner/doctor/finddoctor" element={<FindDoctor />} />
          <Route path="/inner/doctor/appointment" element={<Appointment />} />
          <Route path="/inner/healthCare" element={<HealthCareIndex />} />
          <Route path="/inner/healthBlog" element = {<HealthBlogIndex />} />
          <Route path="/cart" element={<CartIndex />} />
        </Routes>
      </Router>
    </>
  )
}
export default App