import React from "react";
import "../../Cart/cart.css";
import "./labCart.css";

import EmptyCart from "../../../../assets/images/VectorImages/cart empty.png";

import { useQuery } from "@tanstack/react-query";
import CartCard from "../../../../components/CartCard";
import MainLayout from "../../../../components/MainLayout";
import { useDisclosure } from "@chakra-ui/react";
import Slider from "../../../../components/Slider";
import { CouponDrawer } from "../../../../components/Slider/CouponDrawer";
import Bill from "../../../../components/Bill";
import Loader from "../../../../components/Loader";
import { fetchLabCartData } from "../../../../services/labCartService";

const LabCart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // Use the useQuery hook to manage lab cart data and its state
  const { data, isLoading, error } = useQuery(["LabCart"], fetchLabCartData);

  // Calculate subTotal, sampleCollectionCharges, and totalDiscount
  const subTotal = data?.data.reduce((sum, test) => {
    return sum + parseFloat(test.lab_test.price);
  }, 0);
  const sampleCollectionCharges = data?.data.reduce((sum, test) => {
    return sum + parseFloat(test.lab_test.home_sample_charge);
  }, 0);
  const totalDiscount = data?.data.reduce((sum, test) => {
    return (
      sum + parseFloat(test.lab_test.price * (test.lab_test.discount / 100))
    );
  }, 0);

  return (
    <MainLayout>
      <section>
        {isLoading && (
          // Show a loader while data is loading
          <div className="fullContainer">
            <Loader width={"4rem"} height={"4rem"} />
          </div>
        )}
        {error && (
          // Display an error message if there's an error
          <div>
            <p>Error fetching. Try again</p>
          </div>
        )}
        <div className="cart-mainContainer">
          <div className="cart-marginContainer">
            {data &&
              (data.data.length < 1 ? (
                <div style={{ margin: "auto" }}>
                  <img
                    className="vector-image"
                    src={EmptyCart}
                    alt="cartEmpty"
                  />
                </div>
              ) : (
                <>
                  <div className="cart-cardContainer">
                    <p className="main-head-title">Items in Your cart</p>
                    {data.data.map((test) => (
                      // Render each lab cart item
                      <CartCard key={test.uuid} labItem={test} />
                    ))}
                  </div>
                  <div className="cart-rightContainer">
                    <Bill
                      subTotal={subTotal}
                      sampleCollectionCharges={sampleCollectionCharges}
                      discount={totalDiscount}
                    />
                    <Slider
                      onClose={onClose}
                      isOpen={isOpen}
                      btnRef={btnRef}
                      header={"Apply Coupon"}
                      drawerBody={<CouponDrawer />}
                    />
                  </div>
                </>
              ))}
          </div>
        </div>
        {error && <img className="vector-image" src={Error} alt="Error" />}
      </section>
    </MainLayout>
  );
};

export default LabCart;
