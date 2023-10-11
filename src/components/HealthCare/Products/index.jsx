import React from "react";
import Carousel from "react-multi-carousel";
import Card from "react-bootstrap/Card";
import "react-multi-carousel/lib/styles.css";
import Lupus from "../../../assets/images/health/lupus.jpg";
import Digestive from "../../../assets/images/health/digestive.jpg";
import Menstrual from "../../../assets/images/health/menstrual.jpg";
import MothersDay from "../../../assets/images/health/mothersDay.jpg";
import World from "../../../assets/images/health/world.jpg";
// import "../../../assets/css/Health/healthCare.css";
import "./products.css";

const products = [
  {
    id: 1,
    image: World,
    category: "Medicine",
    discount: "30%",
  },
  {
    id: 2,
    image: Lupus,
    category: "Lupus",
    discount: "30%",
  },
  {
    id: 3,
    image: Digestive,
    category: "general",
    discount: "30%",
  },
  {
    id: 4,
    image: Menstrual,
    category: "general",
    discount: "30%",
  },
  {
    id: 5,
    image: MothersDay,
    category: "general",
    discount: "30%",
  },
];
const Products = () => {
  return (
    <>
      <div className="products-container">
        <div className="products-box">
          {/* <div className="card-card-innercared"> */}
          {products.map((product) => (
            <div className="products-card" id="card-health" key={product.id}>
              <img className="products-image" src={product.image} alt="" />
              <p className="products-title">{product.category}</p>
              <p className="products-title">{product.discount}</p>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
export default Products;
