import React from 'react'
import Nav from './Nav/nav'
import InnerNav from './Nav/innerNav'
import SearchBar from './Nav/search'
import HomeSlide from './innerHome/homeslide'
import HomeCard from './innerHome/homeCard'
import HomeItems from './innerHome/homeItems'
import HomeLabs from './innerHome/homeLabs'
import HomeOffers from './innerHome/homeOffers'
import Slider from './innerHome/slider'
import HomePaymentOffers from './innerHome/homePaymentOffers'
import Prescription from './innerHome/prescription'
import Trending from './innerHome/trending'
import Shop from './innerHome/shop'
import NewArrivals from './innerHome/newArrivals'
import TrendingNear from './innerHome/trendingNear'
import FeatureBrand from './innerHome/featureBrands'
import HomeChoose from './innerHome/homeChoose'
import Download from './innerHome/homeDownload'
import Footer from './innerHome/footer'
const HomeIndex = () =>{
    return (
       <>
        <div>
            <Nav />
        </div>
        <div>
            <InnerNav />
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
            <HomeSlide />
        </div>
        <div>
            <HomeCard />
        </div>
        <div>
            <HomeItems />
        </div>
        <div>
            <HomeLabs />
        </div>
        <div>
            <HomeOffers />
        </div>
        <div>
            <Slider />
        </div>
        <div>
            <HomePaymentOffers />
        </div>
        <div>
            <Prescription />
        </div>
        <div>
            <Trending />
        </div>
        <div>
            <Shop />
        </div>
        <div>
            <NewArrivals />
        </div>
        <div>
            <TrendingNear />
        </div>
        <div>
            <FeatureBrand />
        </div>
        <div>
            <HomeChoose />
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
export default HomeIndex