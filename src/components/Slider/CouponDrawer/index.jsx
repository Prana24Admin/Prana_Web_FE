import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../libs/axios";
import Coupon from "../../Coupon";

// CouponDrawer component for displaying a list of coupons
export const CouponDrawer = ({
  selectedCoupon,
  setSelectedCoupon,
  onClose,
}) => {
  // Fetch coupons using React Query
  const fetchCoupons = async () => {
    const response = await axiosInstance.get("/coupons");
    return response.data;
  };

  // Use the useQuery hook to fetch and manage coupon data
  const { data, isLoading, error } = useQuery(["Coupons"], fetchCoupons);

  // JSX structure for rendering the CouponDrawer component
  return (
    <div style={{ marginTop: "0.75rem" }}>
      <div className="small-coupon-container">
        {/* Map through the coupon data and render Coupon components */}
        {data &&
          data.data.map((item) => (
            <Coupon
              key={item.uuid}
              item={item}
              smallCoupon={true}
              selectedCoupon={selectedCoupon}
              setSelectedCoupon={setSelectedCoupon}
              onClose={onClose}
            />
          ))}
      </div>
    </div>
  );
};
