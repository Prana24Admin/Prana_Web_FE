import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./libs/scrollToTop";

import Main from "./pages/Home/Main";
import Login from "./pages/Auth/Login";
import NotFound from "./pages/404";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ProtectedRoute from "./libs/ProtectedRoute";

const PasswordChange = lazy(import("./components/Arrivals/passwordchange"));
const OTP = lazy(import("./components/Arrivals/otp"));
const About = lazy(() => import("./pages/Home/About"));
const Contact = lazy(() => import("./pages/Home/Contact"));
const Careers = lazy(() => import("./pages/Home/Careers"));
const ProfileAccount = lazy(() =>
  import("./pages/Home/Profile/ProfileAccount")
);
const ProfileAddress = lazy(() =>
  import("./pages/Home/Profile/ProfileAddress")
);
const Wishlist = lazy(() => import("./pages/Home/Wishlist"));
const Brands = lazy(() => import("./pages/Home/Brands"));
const BrandDetails = lazy(() => import("./pages/Home/Brands/BrandDetails"));
const Medicine = lazy(() => import("./components/Inner/Medicine/index"));
const Lab = lazy(() => import("./pages/Home/Lab"));
const LabTests = lazy(() => import("./pages/Home/Lab/LabTests"));
const PackageOrder = lazy(() => import("./pages/Home/Packages/PackageOrder"));
const LabCart = lazy(() => import("./pages/Home/Lab/LabCart"));
const LabTestCheckout = lazy(() =>
  import("./pages/Home/Packages/LabTestCheckout")
);
const HealthCare = lazy(() => import("./pages/Home/HealthCare/index"));
const Products = lazy(() => import("./pages/Home/HealthCare/Products"));
const Product = lazy(() => import("./pages/Home/HealthCare/ProductScreen"));
const Cart = lazy(() => import("./pages/Home/Cart"));
const CheckoutScreen = lazy(() => import("./pages/Home/Checkout/Checkout"));
const HealthBlog = lazy(() => import("./components/HealthBlog/index"));
const Doctor = lazy(() => import("./components/Doctor/index"));
const Specialization = lazy(() => import("./components/Doctor/Specialization"));
const FindDoctor = lazy(() => import("./components/Doctor/findDoctor/index"));
const DoctorNearMe = lazy(() => import("./components/Doctor/DoctorNearMe"));
const DoctorProfile = lazy(() => import("./pages/Home/Doctor/DoctorProfile"));
const Ayurveda = lazy(() => import("./components/Inner/Ayurveda/index"));
const OffersTab = lazy(() => import("./pages/Home/Offers/OffersTab"));
const Payment = lazy(() => import("./pages/Home/Offers/Payment"));
const MedicineOffers = lazy(() => import("./pages/Home/Offers/Medicine"));
const Diagnostic = lazy(() => import("./pages/Home/Offers/Diagnostic"));
const HealthCareOffers = lazy(() => import("./pages/Home/Offers/HealthCare"));
const Prescription = lazy(() =>
  import("./components/Home/innerHome/prescription")
);
const HealthcareOrders = lazy(() =>
  import("./pages/Home/Orders/HealthCareOrders")
);
const HealthCareOrderDetails = lazy(() =>
  import("./pages/Home/Orders/OrderDetails")
);
const LabTestOrders = lazy(() => import("./pages/Home/Orders/LabTestsOrders"));
const LabOrderDetails = lazy(() =>
  import("./pages/Home/Orders/OrderDetails/LabOrderDetails")
);
const Appointments = lazy(() => import("./pages/Home/Doctor/Appointments"));
const AppointmentById = lazy(() =>
  import("./pages/Home/Doctor/Appointments/AppointmentById")
);

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfileAccount />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/address"
            element={
              <ProtectedRoute>
                <ProfileAddress />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brands/:id" element={<BrandDetails />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/lab/all-tests" element={<LabTests />} />
          <Route path="/lab/test/:id" element={<PackageOrder />} />
          <Route
            path="/lab/cart"
            element={
              <ProtectedRoute>
                <LabCart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lab/checkout"
            element={
              <ProtectedRoute>
                <LabTestCheckout />
              </ProtectedRoute>
            }
          />
          <Route path="/healthcare" element={<HealthCare />} />
          <Route
            path="/healthcare/categories/:categoryId"
            element={<Products />}
          />
          <Route
            path="/healthcare/categories/:categoryId?subcategory=:id"
            element={<Products />}
          />
          <Route
            path="/product/:id"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutScreen />
              </ProtectedRoute>
            }
          />
          <Route path="/blogs" element={<HealthBlog />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/doctor/specialization" element={<Specialization />} />
          <Route
            path="/doctor/specialization/:id"
            element={
              <ProtectedRoute>
                <FindDoctor />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor/near-me"
            element={
              <ProtectedRoute>
                <DoctorNearMe />
              </ProtectedRoute>
            }
          />
          <Route
            path="/doctor/profile/:id"
            element={
              <ProtectedRoute>
                <DoctorProfile />
              </ProtectedRoute>
            }
          />

          <Route path="/ayurveda" element={<Ayurveda />} />
          <Route
            path="/offers"
            element={
              <ProtectedRoute>
                <OffersTab />
              </ProtectedRoute>
            }
          />
          <Route path="/offers/payment" element={<Payment />} />
          <Route path="/offers/medicine" element={<MedicineOffers />} />
          <Route path="/offers/diagnostic" element={<Diagnostic />} />
          <Route path="/offers/healthcare" element={<HealthCareOffers />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route
            path="/orders/healthcare"
            element={
              <ProtectedRoute>
                <HealthcareOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders/healthcare/:id"
            element={
              <ProtectedRoute>
                <HealthCareOrderDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders/lab"
            element={
              <ProtectedRoute>
                <LabTestOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders/lab/:id"
            element={
              <ProtectedRoute>
                <LabOrderDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <Appointments />
              </ProtectedRoute>
            }
          />
          <Route
            path="/appointments/:id"
            element={
              <ProtectedRoute>
                <AppointmentById />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Navigation;
