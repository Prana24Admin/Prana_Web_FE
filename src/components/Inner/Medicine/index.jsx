import React from 'react'
import Header from '../../Home/Nav/header'
import InnerNav from '../../Home/Nav/innerNav'
import MedicineSlider from './medicineSlider'
import Popular from './popular'
import Seller from './seller'
import Deals from './deals'
import HomeSlide from '../../Home/innerHome/homeslide'
import Picks from './picks'
import Health from './health'
import Medicine from './medicine'
import Footer from '../../Home/innerHome/footer'
const MedicineIndex = () =>{
    return(
        <>
            <div>
                <Header />
            </div>
            <div>
                <InnerNav />
            </div>
            <div>
                <MedicineSlider />
            </div>
            <div>
                <Popular />
            </div>
            <div>
                <Seller />
            </div>
            <div>
                <Deals />
            </div>
            <div>
                <HomeSlide />
            </div>
            <div>
                <Picks />
            </div>
            <div>
                <Health />
            </div>
            <div>
                <Medicine />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default MedicineIndex