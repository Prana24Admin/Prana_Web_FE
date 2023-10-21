import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Arrivals/Register";
import Home from "./components/Home/index";

import Forgot from "./components/Arrivals/forgot";
import OTP from "./components/Arrivals/otp";
import PasswordChange from "./components/Arrivals/passwordchange";

import Contact from "./pages/Home/Contact";

import Prescription from "./components/Home/innerHome/prescription";
import InnerMed from "./components/Inner/Medicine/index";
import InnerAyur from "./components/Inner/Ayurveda/index";
import Doctor from "./components/Doctor/index";
import InnerDoctor from "./components/Doctor/inner/index";
import FindDoctor from "./components/Doctor/findDoctor/index";
import Appointment from "./components/Doctor/findDoctor/appointment";
import InnerLab from "./pages/Home/Lab";
import HealthCareIndex from "./pages/Home/HealthCare/index";
import HealthBlogIndex from "./components/HealthBlog/index";
import Login from "./components/Arrivals/Login/Login";
import Products from "./pages/Home/HealthCare/Products";

import Product from "./components/Home/ProductScreen";
import Wishlist from "./pages/Home/Wishlist";

import CheckoutScreen from "./pages/Home/Checkout/Checkout";

import Cart from "./pages/Home/Cart";
import Careers from "./pages/Home/Careers";
import AboutIndex from "./pages/Home/About";

import Payment from "./pages/Home/Offers/Payment";
import Diagnostic from "./pages/Home/Offers/Diagnostic";
import Medicine from "./pages/Home/Offers/Medicine";
import HealthCare from "./pages/Home/Offers/HealthCare";
import OffersTab from "./pages/Home/Offers/OffersTab";
import OrderDetails from "./pages/Home/Orders/OrderDetails";
import Orders from "./pages/Home/Orders";
import ProfileAddress from "./pages/Home/Profile/ProfileAddress";
import ProfileAccount from "./pages/Home/Profile/ProfileAccount";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/Password" element={<PasswordChange />} />
        <Route path="/about" element={<AboutIndex />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/offers" element={<OffersTab />} />
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
        <Route path="/inner/healthBlog" element={<HealthBlogIndex />} />
        <Route path="/categories/:id" element={<Products />} />
        <Route path="/profile" element={<ProfileAccount />} />
        <Route path="/profile/address" element={<ProfileAddress />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Wishlist />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
