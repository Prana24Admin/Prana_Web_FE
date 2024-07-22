import toast from "react-hot-toast";
import axiosInstance from "../libs/axios";

// Function to fetch all healthcare orders
export const fetchAllOrders = async () => {
  const response = await axiosInstance.get(
    "http://192.168.1.2:4000/api/orders"
  );
  return response.data;
};

// Function to fetch order details by ID
export const fetchOrderHealthcareById = async (id) => {
  const response = await axiosInstance.get(
    `http://192.168.1.2:4000/api/orders/${id}`
  );
  return response.data;
};

export const placeHealthCareCartOrder = async (
  address,
  paymentMethod,
  cartData,
  setSuccessOrderId,
  successOnOpen
) => {
  if (!address) return toast.error("Select delivery address");
  if (!paymentMethod) return toast.error("Select payment method");
  else {
    let completeAddress = JSON.parse(address);
    const shippingAddress = `${completeAddress.houseNumber}, ${completeAddress.street}, ${completeAddress.city}, ${completeAddress.state}, ${completeAddress.pinCode}`;
    const billingAddress = shippingAddress;

    // Check if the "bill" in localStorage contains a selectedCoupon
    const billDetails = JSON.parse(localStorage.getItem("bill"));
    const coupon_code = billDetails?.selectedCoupon?.code;

    const products = cartData.map((item) => {
      return item.product.uuid;
    });

    const formData = new FormData();

    formData.append("product_ids", JSON.stringify(products));
    formData.append("shipping_address", shippingAddress);
    formData.append("billing_address", billingAddress);
    formData.append("payment_method", paymentMethod);
    // Append coupon_code to formData only if it's present in the billDetails
    if (coupon_code) {
      formData.append("coupon_code", coupon_code);
    }

    const response = await axiosInstance.post(
      "http://192.168.1.2:4000/api/orders",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200) {
      setSuccessOrderId(response.data.uuid);
      successOnOpen();
    }

    return response.data;
  }
};
