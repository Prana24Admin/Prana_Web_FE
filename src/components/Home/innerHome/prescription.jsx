import React,{useState} from 'react';
import Upload from '../../../assets/images/home/upload.jpg'
import '../../../assets/css/Home/homePaymentOffers.css'
const Pre=() =>{
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <>
            <div className="home-labs-img" id="target">
                <div className='prescription'>
                    <p style={{fontSize:'24px',fontWeight:'bold',marginLeft:'20px'}}>Order with prescription</p>
                </div>
                <div className='d-flex flex-row pre-row'>
                    <div className='d-flex flex-column col21'>
                        <img className='pres-img' src={Upload} alt="Pres"/>
                    </div>
                    <div className='d-flex flex-column col2'>
                       <p style={{fontWeight:'bold',fontSize:'20px'}}>Order With Prescription</p>
                       <p>Upload prescription and we will deliver your medicines</p>
                       <input type="file" onChange={handleChange} />
                        <img style={{margin:'20px'}}src={file} />
  
                       <button style={{color:'white',backgroundColor:'#0e382c',width:'100px',height:'30px',justifyContent:'center',marginLeft:'100px',border:'none'}}>Upload</button> 
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Pre