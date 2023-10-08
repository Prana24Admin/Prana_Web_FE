import React from 'react'
import Header from '../Home/Nav/header'
import InnerSearch from '../Home/Nav/innerSearch'
import OfferScreen from './offers'
import OffersTab from './offersTab'
import Footer from '../Home/innerHome/footer'
const Offers = () =>{
    return(
        <>
            <div>
                <Header />
            </div>
            <div>
                <InnerSearch />
            </div>
            <div>
                <OfferScreen />
            </div>
            <div>
                <OffersTab />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default Offers