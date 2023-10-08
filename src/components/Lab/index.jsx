import React from 'react'
import Nav from '../Home/Nav/nav'
import InnerNav from '../Home/Nav/innerNav'
import LabSlide from './labSlide'
import Booking from './booking'
import Slider from '../Inner/Medicine/medicineSlider'
import Test from './test'
import LabHealth from './labHealth'
import Package from './package'
import Happy from './happyCustomers'
import Download from '../Home/innerHome/homeDownload'
import Footer from '../Home/innerHome/footer'
const LabIndex = () =>{
    return(
        <>
            <div>
                <Nav />
            </div>
            <div>
                <InnerNav />
            </div>
            <div>
                <LabSlide />
            </div>
            <div>
                <Booking />
            </div>
            <div style={{margin:"20px 60px"}}>
               <Slider /> 
            </div>
            <div>
                <Test />
            </div>
            <div>
                <LabHealth />
            </div>
            <div>
                <Package />
            </div>
            <div>
                <Happy />
            </div>
            <div>
                <Download />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default LabIndex