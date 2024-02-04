import React from "react";
import "./cartbox.css";

import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CartBox = () => {
  const navigate = useNavigate();
  return (
    <div className="cartBox-container" onClick={() => navigate("/lab/cart")}>
      <div className="cartBox-borderContainer">
        <div className="cartBox-justifyContainer">
          <div className="cartBox-flexContainer">
            <div className="cartBox-iconContainer">
              <ShoppingCart size={25} color="var(--crimsonPink)" />
            </div>
            <p className="cartBox-text">Click here to view your lab cart.</p>
          </div>
          <button className="cartBox-button">View Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartBox;
