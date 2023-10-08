import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from '../../Home/Nav/header'
import InnerNav from '../../Home/Nav/innerNav'
import AyurSlide from './ayurslide'
import Offers from './offers'
import Herbs from './herbs'
import Hair from './hair'
import Skin from './skin'
import Digest from './digestive'
import Download from '../../Home/innerHome/homeDownload'
import Footer from '../../Home/innerHome/footer'
const AyurvedaIndex= () =>{
    return(
        <>
            <div>
                <Header />
            </div>
            <div>
                <InnerNav />
            </div>
            <div>
                <AyurSlide />
            </div>
            <div>
                <Offers />
            </div>
            <div>
                <Herbs />
            </div>
            <div>
                <Hair />
            </div>
            <div>
                <Skin />
            </div>
            <div>
                <Digest />
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
export default AyurvedaIndex