import React from 'react'
import Header from '../../Home/Nav/header'
import DoctorNav from '../../Home/Nav/doctorNav'
import Video from './video'
import HealthConcern from './healthConcern'
import Customers from './customers'
import Footer from '../../Home/innerHome/footer'
const Index = () =>{
    return(
        <>
            <div>
                <Header />
            </div>
            <div>
                <DoctorNav />
            </div>
            <div>
                <Video />
            </div>
            <div>
                <HealthConcern />
            </div>
            <div>
                <Customers />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default Index