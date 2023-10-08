import React from 'react'
import '../../../assets/css/Home/homeDownload.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Playstore from '../../../assets/images/home/Download/playstore.jpg'
import AppStore from '../../../assets/images/home/Download/mac_button.jpg'
import Mobile from '../../../assets/images/home/Download/mobile.jpg'
function Downlaod() {
  return (
    <>
        <div className='inner-container8'>
            <div className='inner-sub-container'>
                <div className='d-flex flex-row'>
                    <div className='d-flex flex-column'>
                        <img src={Mobile} alt="" />
                    </div>
                    <div className='d-flex flex-column par-col'>
                        <h1 className='con-8-par'>It's Time To Unlock The Future of Your <br /> Pharmacy.</h1>
                        <p className='con-sub-par'>Stock up your pharmacy with ease, access credit and simplify your operations.</p>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-column sub-col-8'>
                                <img className='playstore' src={Playstore} alt="" />
                            </div>
                            <div className='d-flex flex-column sub-col-8'>
                                <img className='playstore' src={AppStore} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    </>
  )
}

export default Downlaod