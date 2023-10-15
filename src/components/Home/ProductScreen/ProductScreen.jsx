import React from "react";
import Image from "../../../assets/images/profile/avatar.jpg";
import { IndianRupee, Minus, Plus, ShoppingBag, Truck } from "lucide-react";
import "./ProductScreen.css";

const ProductScreen = () => {
  return (
    <div className="product-mainContainer">
      <div className="product-leftContainer">
        <div className="product-leftImage">
          <img className="product-img" src={Image} alt={"sa"} />
        </div>
      </div>
      <div className="md:w-[45%] w-full flex flex-col">
        <div className="flex flex-col gap-2 pb-4 md:pt-0 pt-5">
          <p className="md:text-3xl text-2xl font-semibold">Sanju</p>
          <p className="md:text-sm text-[0.8rem] text-neutral-500 text-justify">
            Is a good boy
          </p>
        </div>
        <div className="flex md:pt-2 items-center gap-1">
          <IndianRupee strokeWidth={2.5} />
          <p className="md:text-2xl text-xl font-semibold">900</p>
        </div>
        <div className="flex items-center md:pt-5 pt-2 gap-8">
          <div className="flex items-center md:h-10 h-8 md:w-32 w-28 justify-evenly bg-lightGray rounded-xl">
            <button>
              <Minus strokeWidth={2.5} size={16} />
            </button>
            <p className="font-semibold">0</p>
            <button>
              <Plus strokeWidth={2.5} size={16} />
            </button>
          </div>
          <div className="w-40 md:text-xs text-[0.5rem] font-medium text-neutral-600">
            <p>
              Only <span className="text-lightOrange">1 items </span> left!
            </p>
            <p>Don't miss it</p>
          </div>
        </div>
        <div className="flex md:pt-6 pt-4 gap-5">
          <button className="bg-darkBlue md:w-[180px] w-[50%] md:py-2 py-1 text-white rounded-xl font-medium">
            <p>Buy Now</p>
          </button>
          <button className="border-2 border-darkBlue md:w-[180px] w-[50%] py-2 text-darkBlue rounded-xl font-medium">
            Add to Cart
          </button>
        </div>
        <div className="md:w-[420px] flex flex-col mt-5  border border-lightGray">
          <div className=" border-b border-lightGray">
            <div className="px-6 py-3 space-y-1">
              <div className="flex gap-2 items-center">
                <Truck size={20} className="text-lightOrange" />
                <p className="text-neutral-800 font-medium text-sm">
                  Fast Delivery
                </p>
              </div>
              <p className="text-xs text-neutral-500 font-medium pl-7">
                Delivery in 3days.
              </p>
            </div>
          </div>
          <div className=" px-6 py-3 space-y-1 md:mb-0 mb-10">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} className="text-lightOrange" />
              <p className="text-neutral-800 font-medium text-sm">
                Return Delivery
              </p>
            </div>
            <p className="text-xs text-neutral-500 font-medium pl-7">
              Free 10days Delivery Returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
