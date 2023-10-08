import React from "react";
import Header from "../Home/Nav/header";
import InnerNav from "../Home/Nav/innerNav";
import HealthBlog from './blogSlide'
import Explore from './explore'
import Content from './content'
import Downlaod from "../Home/innerHome/homeDownload";
import Footer from '../Home/innerHome/footer'
const HealthBlogIndex = () =>{
    return(
        <>
            <div>
                <Header />
            </div>
            <div>
                <InnerNav />
            </div>
            <div>
                <HealthBlog />
            </div>
            <div>
                <Explore />
            </div>
            <div>
                <Content />
            </div>
            <div>
                <Downlaod />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
export default HealthBlogIndex