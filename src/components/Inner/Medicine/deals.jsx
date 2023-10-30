import React from "react";
import "react-multi-carousel/lib/styles.css";
import "../../../assets/css/inner/innerMed.css";
import ProductCarousel from "../../CarouselLayout/ProductCarousel";
import { products } from "../../../utils/categories";
import { ChevronRight } from "lucide-react";
const Deals = () => {
  return (
    <>
      <div className="innerMed-popular">
        <p className="main-title">Exclusive deals on your daily supplements</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            marginRight: "1rem",
            cursor: "pointer",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              fontWeight: "500",
              color: "var(--azureBlue)",
            }}
          >
            View More
          </p>
          <ChevronRight color="var(--azureBlue)" size={15} />
        </div>
      </div>
      <div>
        <ProductCarousel multiData={products} />
      </div>
    </>
  );
};
export default Deals;
