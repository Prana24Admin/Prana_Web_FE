import React from "react";
import Card from "react-bootstrap/Card";
import "../../../assets/css/Doctor/inner/filter.css";
import { BsHandThumbsUpFill } from "react-icons/bs";
import image from "../../../assets/images/profile/avatar.png";
import { useNavigate } from "react-router-dom";
import { ThumbsUp } from "lucide-react";
const Available = () => {
  const navigate = useNavigate();
  const navigateAppointment = () => {
    navigate("/inner/doctor/appointment");
  };
  const docArr = [
    {
      Name: "Dr. Ganesh Shetty",
      Type: "Dentist",
      Experience: "25 years experience overall",
      Place: "Kalyan Nagar,Bangalore  Dental and Orthodontic Clinic",
      Fee: "₹500 Consultation fee at clinic",
      Image:
        "https://imagesx.practo.com/providers/dr-ganesh-shetty-dentist-bangalore-99076776-8ead-45fd-813e-377e936f7465.jpg?i_type=t_100x100",
      Rating: "86%",
      Stories: "33 Patient Stories",
      Availability: " Available Today",
    },
    {
      Name: "Dr. Ganesh Shetty",
      Type: "Dentist",
      Experience: "25 years experience overall",
      Place: "Kalyan Nagar,Bangalore  Dental and Orthodontic Clinic",
      Fee: "₹500 Consultation fee at clinic",
      Image:
        "https://imagesx.practo.com/providers/dr-ganesh-shetty-dentist-bangalore-99076776-8ead-45fd-813e-377e936f7465.jpg?i_type=t_100x100",
      Rating: "86%",
      Stories: "33 Patient Stories",
      Availability: " Available Today",
    },
    {
      Name: "Dr. Ganesh Shetty",
      Type: "Dentist",
      Experience: "25 years experience overall",
      Place: "Kalyan Nagar,Bangalore  Dental and Orthodontic Clinic",
      Fee: "₹500 Consultation fee at clinic",
      Image:
        "https://imagesx.practo.com/providers/dr-ganesh-shetty-dentist-bangalore-99076776-8ead-45fd-813e-377e936f7465.jpg?i_type=t_100x100",
      Rating: "86%",
      Stories: "33 Patient Stories",
      Availability: " Available Today",
    },
  ];
  return (
    <div className="available-mainContainer">
      {/* <div className="d-flex flex-row"> */}
      <div className="available-flexContainer">
        <div className="available-leftContainer">
          {/* <div className="d-flex flex-column col-lg-7"> */}
          <div>
            <p className="available-doctorsTitle">
              3856 doctors available in Bangalore
            </p>
            <p className="available-doctorDetails">
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </div>
          {/* <hr /> */}
          {docArr.map((item) => {
            return (
              <div key={item.id} className="available-flexCard">
                <div className="available-cardContainer">
                  <div>
                    <img
                      className="available-doctorImage"
                      src={item.Image}
                      alt=""
                    />
                    <p className="type">{item.Type}</p>
                  </div>
                  <div>
                    <p className="available-doctorName">{item.Name}</p>
                    <p className="available-doctorDetails">{item.Experience}</p>
                    <p className="available-doctorDetails">{item.Place}</p>
                    <p className="available-doctorDetails">{item.Fee}</p>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        marginTop: "1rem",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          padding: "0.25rem 0.5rem",
                          borderRadius: "5px",
                          background: "var(--cloudGray)",
                        }}
                      >
                        <ThumbsUp size={18} />
                        <p>{item.Rating}</p>
                      </div>
                      <p className="available-storiesText">{item.Stories}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.25rem",
                    }}
                  >
                    <p
                      className="available-doctorName"
                      style={{ color: "green" }}
                    >
                      {item.Availability}
                    </p>
                    <button
                      onClick={navigateAppointment}
                      className="available-button"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="available-rightContainer">
          {/* <div className="d-flex flex-column col-lg-1"></div> */}
          <div>
            <form>
              <p className="available-doctorsTitle">
                Book an appointment with the best doctors for your health needs
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <input
                  className="aliment"
                  type="text"
                  placeholder="Select Ailment"
                  required
                />
                <input
                  className="aliment"
                  type="text"
                  placeholder="Name"
                  required
                />
                <input
                  className="aliment"
                  type="text"
                  placeholder="Contact Number"
                  required
                />
                <input
                  className="aliment"
                  type="text"
                  placeholder="Select City"
                  required
                />
                <p
                  style={{ cursor: "pointer" }}
                  onClick={navigateAppointment}
                  className="available-formButton"
                >
                  Get CostEstimate
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Available;
