import React from "react";
import Header from "../Nav/nav";
import InnerNav from "../Nav/innerNav";
import Footer from "../innerHome/footer";
import FavoritesScreen from "./FavoritesScreen";

const Favorites = () => {
  return (
    <div>
      <Header />
      <InnerNav />
      <FavoritesScreen />
      <Footer />
    </div>
  );
};

export default Favorites;
