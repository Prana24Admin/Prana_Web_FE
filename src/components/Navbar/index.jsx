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
import { ChevronDown, MapPin, Search, ShoppingCart } from "lucide-react";
import { useDisclosure } from "@chakra-ui/react";
import Slider from "../Slider";
import ZipCodeDrawer from "../Slider/ZipCodeDrawer";
import Logo from "../../assets/images/Prana_Logo.webp";
import { AuthContext } from "../../context/AuthProvider";
import { logout } from "../../services/authService";
import toast from "react-hot-toast";
import { fetchUserData } from "../../services/profileService";

const Navbar = () => {
  const pathName = window.location.pathname;
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // const [latitude, setLatitude] = useState(null);
  // const [longitude, setLongitude] = useState(null);
  const [location, setLocation] = useState("Select location");

  const { setData, data } = useContext(ProfileContext);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState();

  const { data: profileData } = useQuery(["Profile"], () =>
    fetchUserData(setData)
  );

  useEffect(() => {
    console.log(profileData);
  });

  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response.status === 200) {
        document.cookie = "accessToken=; Max-Age=0; path=/;";
        document.cookie = "refreshToken=; Max-Age=0; path=/;";
        setIsAuthenticated(false);
        localStorage.clear();
        navigate("/login");
      }
    } catch (err) {
      toast.error("Try again");
    }
  };

  // const getGeoLocation = () => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       function (position) {
  //         setLatitude(position.coords.latitude);
  //         setLongitude(position.coords.longitude);
  //       },
  //       function (error) {
  //         console.error("Error getting location: " + error.message);
  //       }
  //     );
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // };

  // useEffect(() => {
  //   if (latitude !== null && longitude !== null) {
  //     const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setLocation(
  //           data.address.city ? data.address.city : data.address.town
  //         );
  //         localStorage.setItem(
  //           "location",
  //           data.address.city ? data.address.city : data.address.town
  //         );
  //       });
  //   }
  // }, [latitude, longitude]);

  useEffect(() => {
    const locationData = localStorage.getItem("location");
    if (locationData) {
      setLocation(locationData);
    }
  }, [location]);

  useEffect(() => {
    if (searchText.length > 1) {
      const fetchData = async () => {
        const response = await axiosInstance.get(`/home?search=${searchText}`);
        setSearchResult(response.data);
      };
      const delay = 800;
      const debounce = setTimeout(() => {
        fetchData();
      }, delay);
      return () => {
        clearTimeout(debounce);
      };
    }
  }, [searchText]);

  useEffect(() => {
    if (searchText.length === 0) {
      setSearchResult();
    }
  }, [searchText]);

  return (
    <>
      <div className="header">
        <div className="headerFlex">
          <div className="logo">
            <div className=" alignContainer">
              <img
                className="prana-logo"
                width={85}
                height={85}
                src={Logo}
                alt="logo"
                onClick={() => navigate("/")}
              />
              <div className="navbar-location" onClick={onOpen}>
                <div>
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="navbar-deliverTo">Deliver to</p>
                  <p className="navbar-locationText">
                    {location && location !== "Select location" ? (
                      location
                    ) : (
                      <span
                        style={{
                          display: "flex",
                          gap: "0.25rem",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        Select location
                        <ChevronDown size={15} strokeWidth={2.5} />
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="nav">
            <ul className="nav_links">
              <div className="nav_child alignContainer">
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
                  {searchText &&
                  searchResult &&
                  (searchResult.products?.rows.length > 0 ||
                    searchResult.tests?.rows.length > 0) ? (
                    <div className="navbar-searchResultBox">
                      {searchResult &&
                        searchResult.products &&
                        searchResult.products.rows.length > 0 &&
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
                  ) : (
                    searchText && (
                      <div className="navbar-searchResultBox">
                        <div className="navbar-searchResultItem">
                          <p className="navbar-searchResultItemName">
                            No Products or tests Found
                          </p>
                        </div>
                      </div>
                    )
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
                        loading="lazy"
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
                        loading="lazy"
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
                      loading="lazy"
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
                    <Link className="dropdowntext" to={"/profile"}>
                      Your Profile
                    </Link>
                    <Link className="dropdowntext" to={"/orders/healthcare"}>
                      Your Orders
                    </Link>
                    <Link className="dropdowntext" to={"/wishlist"}>
                      Wishlist
                    </Link>

                    <div>
                      {data ? (
                        <a className="dropdowntext" onClick={handleLogout}>
                          Logout
                        </a>
                      ) : (
                        <Link className="dropdowntext" to={"/login"}>
                          Login
                        </Link>
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
      <Slider
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        header={"Choose your Location"}
        css={{
          height: "40vh",
          margin: "auto 0.5rem",
        }}
        drawerBody={
          <ZipCodeDrawer
            isOpen
            onClose={onClose}
            setLocation={setLocation}
            location={location}
          />
        }
      />
    </>
  );
};
export default Navbar;
