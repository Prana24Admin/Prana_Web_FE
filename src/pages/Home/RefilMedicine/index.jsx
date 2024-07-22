import React, { useState } from "react";
import "./AddRefillMedicine.css";
import Profile from "../Profile";
import Input from "../../../components/Input";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field } from "formik";

const AddRefillMedicine = () => {
  const [imagePreview, setImagePreview] = useState("");
  const initialValues = {
    quantity: 1,
    time: new Date(),
    duration: "",
    deliveryAll: "yes",
    refillCycle: "7 days",
    image: null,
  };

  const handleImageChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      setFieldValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFieldValue("image", null);
      setImagePreview("");
    }
  };

  return (
    <Profile>
      <p className="health-Header">Add Refill Medicine</p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values); // Handle form submission logic here
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Input
              type="text"
              name="searchMedicine"
              label="Search Medicine"
              className="health-input"
            />
            <Input
              type="text"
              name="shopCategories"
              label="Shop Categories"
              className="health-input"
            />
            <Input
              type="text"
              name="address"
              label="Address"
              className="health-input"
            />

            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
              <label>Upload Prescription Image</label>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => handleImageChange(event, setFieldValue)}
                />
                {imagePreview && (
                  <div>
                    <img
                      src={imagePreview}
                      alt="Prescription Preview"
                      style={{
                        marginTop: "10px",
                        maxWidth: "100%",
                        width: "200px",
                        height: "200px",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
              <label>
                Should we deliver all the medicines mentioned in your
                prescription?
              </label>
              <div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Field type="radio" id="yes" name="deliveryAll" value="yes" />
                  <label htmlFor="yes">
                    Yes, I want all the medicines from my prescription
                  </label>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Field type="radio" id="no" name="deliveryAll" value="no" />
                  <label htmlFor="no">
                    No, let me specify medicines from my prescription
                  </label>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
              <label>Medicine Refill Cycle</label>
              <div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Field
                    type="radio"
                    id="7days"
                    name="refillCycle"
                    value="7 days"
                  />
                  <label htmlFor="7days">Every 7 days</label>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Field
                    type="radio"
                    id="15days"
                    name="refillCycle"
                    value="15 days"
                  />
                  <label htmlFor="15days">Every 15 days</label>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <Field
                    type="radio"
                    id="30days"
                    name="refillCycle"
                    value="30 days"
                  />
                  <label htmlFor="30days">Every 30 days</label>
                </div>
              </div>
            </div>
            <button type="submit" className="refill-editButton">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </Profile>
  );
};

export default AddRefillMedicine;
