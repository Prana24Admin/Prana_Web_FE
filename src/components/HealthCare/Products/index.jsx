import React from "react";
import Header from "../../Home/Nav/header";
import InnerNav from "../../Home/Nav/innerNav";
import World from "../../../assets/images/home/Arrivals/homeopathic_drops.jpg";
import "./products.css";
import { propTypes } from "react-bootstrap/esm/Image";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "shampoo",
      mrp: 222,
      price: 200,
    },
    {
      id: 2,
      name: "soap",
      mrp: 22,
      price: 20,
    },
  ];
  return (
    <div className="products-container">
      <Header />
      <InnerNav />
      <div className="products-flexContainer">
        <div className="products-leftContainer">
          <div className="products-filtersContainer">
            <h3>Categories</h3>
            <div>
              <h6>Brest Pumps</h6>
              <h6>Incontennenci</h6>
              <h6>Liners</h6>
            </div>
          </div>
        </div>
        <div className="products-rightContainer">
          <h3>Products</h3>
          <div className="products-productsContainer">
            {products.map((product) => (
              <div className="products-productsCard" key={product.id}>
                <div className="products-Imagecenter">
                  <img
                    className="products-productsImage"
                    src={World}
                    alt="Sasasa"
                  />
                </div>
                <p className="products-title">{product.name}</p>
                <p className="products-mrpPrice">
                  MRP:<span className="products-mrp"> {product.mrp}</span>
                </p>
                <p className="products-discountPrice">
                  Our Price:{product.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
