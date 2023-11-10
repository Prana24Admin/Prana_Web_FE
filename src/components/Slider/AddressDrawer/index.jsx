import { Building, CheckCircle, Home } from "lucide-react";
import "./addressDrawer.css";

import Input from "../../Input";
import { handleRefetchProfileData } from "../../../libs/queryFunctions";
import { useContext } from "react";
import { ProfileContext } from "../../../context/ProfileProvider";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { addUserAddress } from "../../../services/profileService";

// AddressDrawer component for adding/editing user addresses
export const AddressDrawer = ({ method, additionalAddress, onClose }) => {
  // Access profile data from the context
  const { data } = useContext(ProfileContext);

  // React Hook Form setup for handling form state
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    // Set default values based on the method (add, edit)
    defaultValues: {
      id:
        method === "add"
          ? uuidv4()
          : method === "edit"
          ? data.uuid
          : additionalAddress.id,
      // Set other default values based on the method
      place:
        method === "add"
          ? ""
          : method === "edit"
          ? data.address.place
          : additionalAddress.place,
      name:
        method === "add"
          ? ""
          : method === "edit"
          ? data.address.name
          : additionalAddress.name,
      phoneNumber:
        method === "add"
          ? ""
          : method === "edit"
          ? data.address.phoneNumber
          : additionalAddress.phoneNumber,
      houseNumber:
        method === "add"
          ? ""
          : method === "edit"
          ? data.address.houseNumber
          : additionalAddress.houseNumber,
      street:
        method === "add"
          ? ""
          : method === "edit"
          ? data.address.street
          : additionalAddress.street,
      city:
        method === "add"
          ? ""
          : method === "edit"
          ? data.address.city
          : additionalAddress.city,
      state:
        method === "add"
          ? ""
          : method === "edit"
          ? data.address.state
          : additionalAddress.state,
      pinCode:
        method === "add"
          ? ""
          : method === "edit"
          ? data.address.pinCode
          : additionalAddress.pinCode,
    },
  });

  // Handle form submission
  const onSubmit = async (formData) => {
    try {
      // Validate form data
      if (formData.place === "") return;

      const response = await addUserAddress(
        data,
        method,
        formData,
        additionalAddress
      );

      // If the response is successful, update the profile data and close the form
      if (response.status === 200 || response.status === 201) {
        handleRefetchProfileData();
        onClose();
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  // JSX structure for rendering the AddressDrawer component
  return (
    <div>
      <form style={{ marginTop: "0.5rem" }} onSubmit={handleSubmit(onSubmit)}>
        {/* Address type selection buttons */}
        <div>
          <div className="addressDrawer-iconContainer">
            <button
              onClick={() => setValue("place", "Home")}
              type="button"
              className={
                getValues("place") === "Home"
                  ? "addressDrawer-selectedInnerIconContainer"
                  : "addressDrawer-innerIconContainer"
              }
            >
              {getValues("place") === "Home" ? (
                <CheckCircle size={16} strokeWidth={2.5} />
              ) : (
                <Home size={16} />
              )}
              <p>Home</p>
            </button>
            <button
              onClick={() => setValue("place", "Work")}
              type="button"
              className={
                getValues("place") === "Work"
                  ? "addressDrawer-selectedInnerIconContainer"
                  : "addressDrawer-innerIconContainer"
              }
            >
              {getValues("place") === "Work" ? (
                <CheckCircle size={16} strokeWidth={2.5} />
              ) : (
                <Building size={16} />
              )}
              <p>Work</p>
            </button>
            <button
              onClick={() => setValue("place", "Other")}
              type="button"
              className={
                getValues("place") === "Other"
                  ? "addressDrawer-selectedInnerIconContainer"
                  : "addressDrawer-innerIconContainer"
              }
            >
              {getValues("place") === "Other" ? (
                <CheckCircle size={16} strokeWidth={2.5} />
              ) : (
                <Building size={16} />
              )}
              <p>Other</p>
            </button>
          </div>
        </div>
        {/* Form inputs for address details */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginTop: "1rem",
          }}
        >
          {/* Name input */}
          <div className="addressDrawer-input">
            <Input
              label="Name"
              register={register("name", {
                required: true,
              })}
              name={"name"}
              error={errors}
            />
            {errors.name?.type === "required" && (
              <p
                style={{ color: "var(--crimsonPink)", fontSize: "0.8rem" }}
                role="alert"
              >
                Name is required
              </p>
            )}
          </div>
          {/* Phone number input */}
          <div className="addressDrawer-input">
            <Input
              label="Phone number"
              register={register("phoneNumber", {
                required: true,
              })}
              name={"phoneNumber"}
              error={errors}
            />
            {errors.phoneNumber?.type === "required" && (
              <p
                style={{ color: "var(--crimsonPink)", fontSize: "0.8rem" }}
                role="alert"
              >
                Phone number is required
              </p>
            )}
          </div>
          {/* House/Apartment number input */}
          <div className="addressDrawer-input">
            <Input
              label={"House No/ Apartment No"}
              register={register("houseNumber", {
                required: true,
              })}
              name={"houseNumber"}
              error={errors}
            />
            {errors.houseNumber?.type === "required" && (
              <p
                style={{ color: "var(--crimsonPink)", fontSize: "0.8rem" }}
                role="alert"
              >
                House number is required
              </p>
            )}
          </div>
          {/* Street input */}
          <div className="addressDrawer-input">
            <Input
              label="Street"
              register={register("street", {
                required: true,
              })}
              name={"street"}
              error={errors}
            />
            {errors.street?.type === "required" && (
              <p
                style={{ color: "var(--crimsonPink)", fontSize: "0.8rem" }}
                role="alert"
              >
                Street is required
              </p>
            )}
          </div>
          {/* City input */}
          <div className="addressDrawer-input">
            <Input
              label="City"
              register={register("city", {
                required: true,
              })}
              name={"city"}
              error={errors}
            />
            {errors.city?.type === "required" && (
              <p
                style={{ color: "var(--crimsonPink)", fontSize: "0.8rem" }}
                role="alert"
              >
                City is required
              </p>
            )}
          </div>
          {/* State and Pincode inputs */}
          <div style={{ display: "flex", gap: "1rem" }}>
            <div className="addressDrawer-input">
              <Input
                label="State"
                register={register("state", {
                  required: true,
                })}
                name={"state"}
                error={errors}
              />
              {errors.state?.type === "required" && (
                <p
                  style={{ color: "var(--crimsonPink)", fontSize: "0.8rem" }}
                  role="alert"
                >
                  State is required
                </p>
              )}
            </div>
            <div className="addressDrawer-input">
              <Input
                label="Pincode"
                register={register("pinCode", {
                  required: true,
                })}
                name={"pinCode"}
                error={errors}
              />
              {errors.pinCode?.type === "required" && (
                <p
                  style={{ color: "var(--crimsonPink)", fontSize: "0.8rem" }}
                  role="alert"
                >
                  Pincode is required
                </p>
              )}
            </div>
          </div>
        </div>
        {/* Buttons for cancel and save */}
        <div className="addressDrawer-buttonsContainer">
          <button className="addressDrawer-cancelButton" onClick={onClose}>
            Cancel
          </button>
          <button
            disabled={isSubmitting}
            type="submit"
            className="addressDrawer-saveButton"
          >
            {isSubmitting ? "Loading ..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};
