import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../libs/axios";
import Coupon from "../../Coupon";

export const CouponDrawer = ({
  selectedCoupon,
  setSelectedCoupon,
  onClose,
}) => {
  const fetchCoupons = async () => {
    const response = await axiosInstance.get("/coupons");
    return response.data;
  };

  const { data, isLoading, error } = useQuery(["Coupons"], fetchCoupons);

  return (
    <div style={{ marginTop: "0.75rem" }}>
      <div className="small-coupon-container">
        {data &&
          data.data.map((item) => {
            return (
              <Coupon
                key={item.uuid}
                item={item}
                smallCoupon={true}
                selectedCoupon={selectedCoupon}
                setSelectedCoupon={setSelectedCoupon}
                onClose={onClose}
              />
            );
          })}
      </div>
    </div>
  );
};
