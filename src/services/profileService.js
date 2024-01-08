import toast from "react-hot-toast";
import axiosInstance from "../libs/axios";
import { handleRefetchProfileData } from "../libs/queryFunctions";

export const fetchUserData = async (setData) => {
  const response = await axiosInstance.get("/users/profile");
  setData(response.data);
  return response.data;
};

export const updateUserProfile = async (userData) => {
  const response = await axiosInstance.patch("/users/profile", {
    first_name: userData.firstName,
    last_name: userData.lastName,
    email: userData.email,
    phone_number: userData.phoneNumber,
  });

  return response.data;
};

export const uploadUserImage = async (formData) => {
  try {
    const response = await axiosInstance.post(
      "https://api-prana.prana24.in/api/users/profile/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200 || response.status === 201)
      handleRefetchProfileData();
    return response.data;
  } catch (error) {
    if (error.message === "Network Error")
      toast.error("Cannot upload images greater than 5mb");
  }
};

export const addUserAddress = async (
  data,
  method,
  formData,
  additionalAddress
) => {
  let response;
  // Perform actions based on the method (add, edit)
  if (method === "add") {
    if (!data || !data.address) {
      // If user has no address, patch profile with the new address
      response = await axiosInstance.patch("/users/profile", {
        address: formData,
      });
    } else {
      // If user has an address, add the new address to additional addresses
      response = await axiosInstance.patch("/users/profile", {
        additional_address: [...(data.additional_address || []), formData],
      });
    }
    if (response) {
      toast.success("Added");
    }
  } else if (method === "edit") {
    // Edit the existing address in the profile
    response = await axiosInstance.patch("/users/profile", {
      address: formData,
    });
    if (response) {
      toast.success("Updated");
    }
  } else {
    // Edit a specific additional address
    const index =
      data?.additional_address &&
      data.additional_address.findIndex(
        (address) => address.id === additionalAddress.id
      );

    if (index !== -1) {
      const updatedAddress = [...(data.additional_address || [])];
      updatedAddress[index] = { ...updatedAddress[index], ...formData };
      response = await axiosInstance.patch("/users/profile", {
        additional_address: updatedAddress,
      });
      if (response) {
        toast.success("Updated");
      }
    }
  }

  return response;
};

export const handleDeleteUserAddress = async () => {
  const response = await axiosInstance.patch("/users/profile", {
    address: {},
  });

  if (response.status === 200 || response.status === 201) {
    handleRefetchProfileData();
    toast.success("Deleted");
  }
  return response.data;
};

export const handleDeleteUserAdditionalAddress = async (data, addressId) => {
  const index = data?.additional_address.findIndex(
    (address) => address.id === addressId
  );
  if (index !== -1) {
    const additionalAddress = [...data?.additional_address].filter(
      (address) => address.id !== addressId
    );
    const response = await axiosInstance.patch("/users/profile", {
      additional_address: additionalAddress,
    });
    if (response.status === 200 || response.status === 201) {
      handleRefetchProfileData();
      toast.success("Deleted");
    }
    return response.data;
  }
};
