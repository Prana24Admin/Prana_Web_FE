import React from 'react'
import Header from '../../Home/Nav/header'
import InnerNav from '../../Home/Nav/innerNav'
import Footer from '../../Home/innerHome/footer'
import RightDoctor from './rightDoctor'
import Filter from './filter'
import Available from './available'
const FindDoctorIndex = () =>{
    return(
        <> 
            <div>
                <Header />
            </div>
            <div>
                <InnerNav />
            </div>
            <div>
                <RightDoctor />
            </div>
            <div>
                <Filter />
            </div>
            <div>
                <Available />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default FindDoctorIndex