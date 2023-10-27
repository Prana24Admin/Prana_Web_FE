import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../libs/axios";
import { ProfileContext } from "../../context/ProfileProvider";
import { useQuery } from "@tanstack/react-query";
import Avatar from "../../assets/images/profile/avatar.png";
import CategoryNav from "./CategoryNav";
import { Search, ShoppingCart } from "lucide-react";

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

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [location, setLocation] = useState({});

  const { setData, data } = useContext(ProfileContext);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState();

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

  const getGeoLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        function (error) {
          console.error("Error getting location: " + error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setLocation(data.address);
          console.log(location);
        });
    }
  }, [latitude, longitude]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstance.get(`/home?search=${searchText}`);
      setSearchResult(response.data);
      console.log(searchResult);
    };
    const delay = 800;
    const debounce = setTimeout(() => {
      fetchData();
    }, delay);
    return () => {
      clearTimeout(debounce);
    };
  }, [searchText]);

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
              <div onClick={getGeoLocation}>
                <p>
                  {location && location.city
                    ? location.city
                    : location.town
                    ? location.town
                    : "Pincode"}
                </p>
              </div>
            </div>
          </div>
          <div className="nav">
            <ul className="nav_links">
              <div className="nav_child alingContainer">
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
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  {searchText && searchResult && (
                    <div className="navbar-searchResultBox">
                      {searchResult.products.rows.length > 0 &&
                        searchResult.products.rows.length < 8 &&
                        searchResult.products?.rows.map((product) => (
                          <div
                            className="navbar-searchResultItem"
                            key={product.uuid}
                            onClick={() => navigate(`/product/${product.uuid}`)}
                          >
                            <p className="navbar-searchResultItemName">
                              {product.name}
                            </p>
                            <p className="navbar-searchResultItemCategory">
                              in Products
                            </p>
                          </div>
                        ))}
                      {searchResult.tests.rows.length > 0 &&
                        searchResult.tests.rows.length < 8 &&
                        searchResult.tests.rows.map((test) => (
                          <div
                            className="navbar-searchResultItem"
                            key={test.uuid}
                            onClick={() => navigate(`/lab/test/${test.uuid}`)}
                          >
                            <p className="navbar-searchResultItemName">
                              {test.name}
                            </p>
                            <p className="navbar-searchResultItemCategory">
                              in Lab Tests
                            </p>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
                {!pathName.includes("/lab") && (
                  <div>
                    <Link to="/cart">
                      <div className="navbar-cartContainer">
                        <ShoppingCart size={20} />
                        <p style={{ fontSize: "1.1rem" }}>Cart</p>
                      </div>
                    </Link>
                  </div>
                )}

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
