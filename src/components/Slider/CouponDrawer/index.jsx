import { useQuery } from "@tanstack/react-query";
import Coupon from "../../Coupon";
import { fetchCoupons } from "../../../services/couponService";

export const CouponDrawer = ({
  selectedCoupon,
  setSelectedCoupon,
  onClose,
}) => {
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
