import React from 'react'
import Person from '../../assets/images/lab/call-order1.png'
import { IoCallSharp } from 'react-icons/io5';
import '../../assets/css/Lab/index.css'
const BookingTest = () =>{
    return(
        <>
            <div className='d-flex flex-row row-space-lab'>
                <div className='d-flex flex-column'>
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-column'>
                            <img className='labicon-person' src={Person} alt="" />
                        </div>
                        <div className='d-flex flex-column inner-col-lab-med'>
                            <p className='innerLab-par1-med'>Need help with booking your test?</p>
                            <p className='innerLab-par-med'>Our experts are here to help you</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex-column'>
                    <p className='lab-num'><span className='med-call-icon'><IoCallSharp /></span>+918886786584</p>
                </div>
            </div>
        </>
    )
}
export default BookingTest