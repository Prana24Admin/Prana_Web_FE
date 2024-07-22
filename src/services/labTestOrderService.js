import toast from "react-hot-toast";
import axiosInstance from "../libs/axios";

// Function to fetch all lab test orders
export const fetchAllLabOrders = async () => {
  const response = await axiosInstance.get(
    "http://192.168.1.2:4000/api/orders/laborders/"
  );
  return response.data;
};

// Function to fetch lab order details by ID
export const fetchLabOrderById = async (id) => {
  const response = await axiosInstance.get(
    `http://192.168.1.2:4000/api/orders/laborders/${id}`
  );
  return response.data;
};

export const placeLabCartOrder = async (
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

    // let coupon_code = JSON.parse(localStorage.getItem("bill"))?.selectedCoupon.code;

    const tests = cartData.map((test) => {
      return test.lab_test.uuid;
    });

    const formData = new FormData();

    formData.append("lab_test_ids", JSON.stringify(tests));
    formData.append("shipping_address", shippingAddress);
    formData.append("billing_address", billingAddress);
    formData.append("payment_method", paymentMethod);
    // formData.append("coupon_code", coupon_code);

    const response = await axiosInstance.post(
      "http://192.168.1.2:4000/api/orders/laborders",
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
