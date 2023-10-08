import React from "react";
import Header from "../Home/Nav/header";
import Cart from './cart'
import Footer from "../Home/innerHome/footer";
const CartIndex= () =>{
    return(
        <>
            <div>
                <Header />

            </div>
            <div>
                <Cart />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default CartIndex