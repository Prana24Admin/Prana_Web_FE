import React from 'react'
import {BiCurrentLocation, BiSearch} from 'react-icons/bi'
const RightDoctor= () =>{
    return(
        <>
            <div className="inner-form">
                <div className='d-flex flex-row'>
                    <div className='d-flex flex-column'>
                        <span className='email' style={{marginLeft:36}}><BiCurrentLocation color="#000"/></span>
                        <input style={{marginLeft:30}} class="input-field" type="text" placeholder="Hyderabad" />
                    </div>
                    <div className='d-flex flex-column'>
                        <div className='d-flex flex-column'>
                            <span className='email' style={{marginLeft:36}}><BiSearch color="#000"/></span>
                            <input style={{marginLeft:30}} class="input-field" type="Search" placeholder="Doctor" />
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default RightDoctor