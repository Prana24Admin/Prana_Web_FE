import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

import ProfileAddress from "./pages/Home/Profile/ProfileAddress";
import ProfileAccount from "./pages/Home/Profile/ProfileAccount";
import PackageOrder from "./pages/Home/Packages/PackageOrder";
import LabTestCheckout from "./pages/Home/Packages/LabTestCheckout";
import LabTests from "./pages/Home/Lab/LabTests";
import LabCart from "./pages/Home/Lab/LabCart";
import HealthcareOrders from "./pages/Home/Orders/HealthCareOrders";
import LabTestOrders from "./pages/Home/Orders/LabTestsOrders";
import HealthCareOrderDetails from "./pages/Home/Orders/OrderDetails";
import LabOrderDetails from "./pages/Home/Orders/OrderDetails/LabOrderDetails";
import ScrollToTop from "./libs/scrollToTop";
import Main from "./pages/Home/Main";
import NotFound from "./pages/404";
import DoctorNearMe from "./components/Doctor/DoctorNearMe";
import DoctorProfile from "./pages/Home/Doctor/DoctorProfile";
import Brands from "./pages/Home/Brands";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import BrandDetails from "./pages/Home/Brands/BrandDetails";
import Specialization from "./components/Doctor/Specialization";

const Navigation = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/Password" element={<PasswordChange />} />

          <Route path="/" element={<Main />} />

          <Route path="/about" element={<AboutIndex />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />

          <Route path="/profile" element={<ProfileAccount />} />
          <Route path="/profile/address" element={<ProfileAddress />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/:id" element={<BrandDetails />} />

          <Route path="/medicine" element={<InnerMed />} />

          <Route path="/lab" element={<InnerLab />} />
          <Route path="/lab/all-tests" element={<LabTests />} />
          <Route path="/lab/test/:id" element={<PackageOrder />} />
          <Route path="/lab/cart" element={<LabCart />} />
          <Route path="/lab/checkout" element={<LabTestCheckout />} />

          <Route path="/healthcare" element={<HealthCareIndex />} />
          <Route
            path="/healthcare/categories/:categoryId"
            element={<Products />}
          />
          <Route
            path="/healthcare/categories/:categoryId/:id"
            element={<Products />}
          />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutScreen />} />

          <Route path="/blogs" element={<HealthBlogIndex />} />

          <Route path="/doctor" element={<Doctor />} />
          <Route path="/inner/doctor/consultant" element={<InnerDoctor />} />
          <Route path="/doctor/specialization" element={<Specialization />} />
          <Route path="/doctor/specialization/:id" element={<FindDoctor />} />
          <Route path="/doctor/near-me" element={<DoctorNearMe />} />
          <Route path="/doctor/profile/:id" element={<DoctorProfile />} />
          <Route path="/inner/doctor/appointment" element={<Appointment />} />

          <Route path="/ayurveda" element={<InnerAyur />} />

          <Route path="/offers" element={<OffersTab />} />
          <Route path="/offers/payment" element={<Payment />} />
          <Route path="/offers/medicine" element={<Medicine />} />
          <Route path="/offers/diagnostic" element={<Diagnostic />} />
          <Route path="/offers/healthcare" element={<HealthCare />} />

          <Route path="/prescription" element={<Prescription />} />

          <Route path="/orders/healthcare" element={<HealthcareOrders />} />
          <Route
            path="/orders/healthcare/:id"
            element={<HealthCareOrderDetails />}
          />
          <Route path="/orders/lab" element={<LabTestOrders />} />
          <Route path="/orders/lab/:id" element={<LabOrderDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Navigation;
