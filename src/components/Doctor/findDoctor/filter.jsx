import React from 'react'
import '../../../assets/css/Doctor/inner/filter.css'
const Filter = () =>{
    return(
        <>
            <div className='d-flex flex-row filter'>
                <div className='d-flex flex-column video-filter'>
                    <p style={{color:'white'}}>Video Consult</p>
                </div>
                <div className='d-flex flex-column video-filter'>

                    <select style={{background:'transparent',color:'white'}}>
                        <option style={{color:'blue'}}>Availability</option>
                        <option style={{color:'blue'}} >Availabile Today</option>
                        <option style={{color:'blue'}}>Availabile Tomorrow</option>
                        <option style={{color:'blue'}} >Availabile in Next 7days</option>
                    </select>
                </div>
                <div className='d-flex flex-column video-filter'>
                    <div className='d-flex flex-row'>
                        <div className='d-flex flex-column'>
                            <p style={{color:'white'}}>Sort By</p>
                        </div>
                        <div className='d-flex flex-column' style={{marginLeft:40}}>
                            <select style={{background:'transparent',color:'white'}}>
                                <option style={{color:'blue'}}>Availability</option>
                                <option style={{color:'blue'}}>Earliest first</option>
                                <option style={{color:'blue'}}>Price low to high</option>
                                <option style={{color:'blue'}}>Oldest first</option>
                            </select>
                        </div>
                    </div>
                    
                
                </div>
            </div>
        </>
    )
}
export default Filter