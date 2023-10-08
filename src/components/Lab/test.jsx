import React from 'react'
import All from '../../assets/images/lab/test/all.jpg'
import Book from '../../assets/images/lab/test/book.jpg'
import Health from '../../assets/images/lab/test/health.jpg'
import Test from '../../assets/images/lab/test/test.jpg'
import '../../assets/css/Lab/index.css'
const AllTest = () =>{
    return(
        <>
            <div className='d-flex flex-row innerTest-med'>
                <div className='d-flex flex-column innerTestcol'>
                    <div style={{paddingTop: 12}} className='d-flex flex-row inner-inner-row'>
                        <div  className='d-flex flex-column'>
                            <img className='innerTest-test' src={Test} alt="" />
                        </div>
                        <div className='d-flex flex-column'>
                           <p>All Tests</p> 
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column innerTestcol'>
                    <div style={{paddingTop: 12}} className='d-flex flex-row inner-inner-row'>
                        <div className='d-flex flex-column'>
                            <img className='innerTest-test' src={Health} alt="" />
                        </div>
                        <div className='d-flex flex-column'>
                           <p>Health Packages</p> 
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column innerTestcol'>
                    <div style={{paddingTop: 12}} className='d-flex flex-row inner-inner-row'>
                        <div className='d-flex flex-column'>
                            <img className='innerTest-test' src={Book} alt="" />
                        </div>
                        <div className='d-flex flex-column'>
                           <p>Upload Prescription</p> 
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column innerTestcol'>
                    <div style={{  paddingTop: 12 }} className='d-flex flex-row inner-inner-row'>
                        <div className='d-flex flex-column'>
                            <img className='innerTest-test' src={All} alt="" />
                        </div>
                        <div className='d-flex flex-column'>
                           <p>Book a Call</p> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AllTest