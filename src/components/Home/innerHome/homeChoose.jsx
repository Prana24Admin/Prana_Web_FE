import React from 'react'
import Med from '../../../assets/images/home/choose/med-foot.jpg'
import Location from '../../../assets/images/home/choose/location.jpg'
import Family from '../../../assets/images/home/choose/family.jpg'
import Delivery from '../../../assets/images/home/choose/deliveryBoy.jpg'
import '../../../assets/css/Home/homeChoose.css'
const Choose = () =>{
    return(
        <>
            <div className="choose">
                <p className="choose-par">Why choose Us?</p>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-column col-lg-3">
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-column">
                                <img className="choose-img" src={Family} alt=""/>
                            </div>
                            <div className="d-flex flex-column choose-col">
                                <p className="choose-mill">32 Million+</p>
                                <p>Registered users as of Mar 31, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column col-lg-3">
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-column">
                                <img className="choose-img" src={Delivery} alt=""/>
                            </div>
                            <div className="d-flex flex-column choose-col">
                                <p className="choose-mill">36 Million+</p>
                                <p>Orders on Pharmeasy till date </p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column col-lg-3">
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-column">
                                <img className="choose-img" src={Med} alt=""/>
                            </div>
                            <div className="d-flex flex-column choose-col">
                                <p className="choose-mill">99000+</p>
                                <p>Registered users as of Mar 31, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column col-lg-3">
                        <div className="d-flex flex-row">
                            <div className="d-flex flex-column">
                                <img className="choose-img" src={Location} alt=""/>
                            </div>
                            <div className="d-flex flex-column choose-col">
                                <p className="choose-mill">19500n+</p>
                                <p>Pin codes serviced last 3 months</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Choose