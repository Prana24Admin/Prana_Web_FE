import React from 'react'
import Header from '../Home/Nav/nav'
import DoctorNav from '../Home/Nav/doctorNav'
import SearchBar from '../Home/Nav/innerSearch'
import Welcome from './welcome'
import Items from './items'
import Clinic from './clinic'
import Users from './users'
import Download from '../Home/innerHome/homeDownload'
import Footer from '../Home/innerHome/footer'
const DoctorIndex = () =>{
    return(
        <>
            <div>
                <Header />
            </div>
            <div>
                <DoctorNav />
            </div>
            <div>
                <SearchBar />
            </div>
            <div>
                <Welcome />
            </div>
            <div>
                <Items />
            </div>
            <div>
                <Clinic />
            </div>
            <div>
                <Users />
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
export default DoctorIndex