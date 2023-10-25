import React, { useContext } from "react";
import "./navbar.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../libs/axios";
import { ProfileContext } from "../../context/ProfileProvider";
import { useQuery } from "@tanstack/react-query";
import Avatar from "../../assets/images/profile/avatar.png";
import CategoryNav from "./CategoryNav";
import { Search, ShoppingCart, ShoppingCartIcon } from "lucide-react";

const Navbar = () => {
  const pathName = window.location.pathname;
  const navigate = useNavigate();
  const navigateAbout = () => {
    navigate("/about");
  };
  const navigateRegister = () => {
    navigate("/register");
  };

  const navigateContact = () => {
    navigate("/contact");
  };
  const navigateCareer = () => {
    navigate("/career");
  };
  const navigateHome = () => {
    navigate("/home");
  };
  const navigateofferScreen = () => {
    navigate("/offers");
  };
  const navigateCart = () => {
    navigate("/cart");
  };

  const { setData, data } = useContext(ProfileContext);

  const fetchProfileData = async () => {
    const response = await axiosInstance.get("/users/profile");
    setData(response.data);
    return response.data;
  };

  const {
    data: profileData,
    isLoading,
    error,
  } = useQuery(["Profile"], fetchProfileData);

  const handleLogout = async () => {
    const token = localStorage.getItem("accessToken");
    const response = await axiosInstance.post("/auth/logout", {
      token: token,
    });
    if (response.status === 200) {
      navigate("/login");
    }
  };

  const getGeoLocation = () => {};

  return (
    <>
      <div className="header">
        <div className="headerFlex">
          <div className="logo">
            <div className="d-flex flex-row alingContainer">
              <div
                className="d-flex flex-column"
                onClick={() => navigate("/home")}
              >
                <p className="par-nav">Prana24 </p>
              </div>
              <div>
                <p onClick={getGeoLocation}>Pincode</p>
              </div>
              {/* <div className="d-flex flex-column">
                  <div className="inner-form alingContainer">
                    <span className="email">
                      <BiCurrentLocation color="#232223" />
                    </span>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Panduranga classic, Vasanth Nagar Colony, Hyderabad"
                    />
                  </div>
                </div> */}
            </div>
          </div>
          <div className="nav">
            <ul className="nav_links">
              <div className="nav_child alingContainer">
                {/* <div>
                    <Link to="/home">
                      <li onClick={navigateHome}>Home</li>
                    </Link>
                  </div> */}
                {/* <div>
                    <Link to="/about">
                      <li onClick={navigateAbout}>
                        <a className="about" href="/about">
                          About Us
                        </a>
                      </li>
                    </Link>
                  </div>
                  <div>
                    <Link to="/contact">
                      <li onClick={navigateContact}>
                        <a className="about" href="/contact">
                          Contact Us
                        </a>
                      </li>
                    </Link>
                  </div>
                  <div>
                    <Link to="/career">
                      <li onClick={navigateCareer}>
                        <a className="about" href="/career">
                          Career
                        </a>
                      </li>
                    </Link>
                  </div> */}
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    marginRight: "1rem",
                  }}
                >
                  <Search
                    size={18}
                    style={{
                      position: "absolute",
                      display: "flex",
                      top: "20%",
                      left: "2%",
                    }}
                    color="#c1c1c1"
                  />
                  <input
                    placeholder="Search for Medicine, Labs"
                    type="text"
                    className="search-field"
                  />
                </div>
                {!pathName.includes("/lab") && (
                  <div>
                    <Link to="/cart">
                      {/* <li onClick={navigateCart}>
                        <a
                          className="about"
                          href="/contact"
                          style={{ alignItems: "center", gap: "1rem" }}
                        >
                          <ShoppingCart size={18} />
                          Cart
                        </a>
                      </li> */}
                      <div className="navbar-cartContainer">
                        <ShoppingCart size={20} />
                        <p style={{ fontSize: "1.1rem" }}>Cart</p>
                      </div>
                    </Link>
                  </div>
                )}
                {/* <div>
                  <Link to="/offers">
                    <li onClick={navigateofferScreen}>
                      <a style={{ textDecoration: "none" }} className="about">
                        Offers
                      </a>
                    </li>
                  </Link>2
                </div> */}
                <div className="nav-dropdown">
                  {data ? (
                    data.image !== null ? (
                      <img
                        src={data?.image}
                        alt="avatar"
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                          borderRadius: "50px",
                        }}
                      />
                    ) : (
                      <img
                        src={Avatar}
                        alt="avatar"
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "cover",
                          borderRadius: "50px",
                        }}
                      />
                    )
                  ) : (
                    <img
                      src={Avatar}
                      alt="avatar"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                        borderRadius: "50px",
                      }}
                    />
                  )}

                  <div className="dropdown-content">
                    <a
                      className="dropdowntext"
                      onClick={() => navigate("/profile")}
                    >
                      Your Profile
                    </a>
                    <a
                      className="dropdowntext"
                      onClick={() => navigate("/healthcare/orders")}
                    >
                      Your Orders
                    </a>
                    <a
                      className="dropdowntext"
                      onClick={() => navigate("/wishlist")}
                    >
                      Favorites
                    </a>
                    <div>
                      {data ? (
                        <a className="dropdowntext" onClick={handleLogout}>
                          Logout
                        </a>
                      ) : (
                        <a
                          className="dropdowntext"
                          onClick={() => navigate("/login")}
                        >
                          Login
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                {/* <div>
                  <li>
                    <button className="download">Download App</button>
                  </li>
                </div> */}
                <div>
                  <li>
                    <FloatingWhatsApp />
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <CategoryNav />
      </div>
    </>
  );
};
export default Navbar;
