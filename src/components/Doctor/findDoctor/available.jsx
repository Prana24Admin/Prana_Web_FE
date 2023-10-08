import React from "react";
import Card from 'react-bootstrap/Card';
import '../../../assets/css/Doctor/inner/filter.css'
import { BsHandThumbsUpFill } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
const Available = () =>{
    const navigate=useNavigate();
    const navigateAppointment =()=>{
        navigate('/inner/doctor/appointment')
    }
    const docArr=[
        {
            
                "Name": "Dr. Ganesh Shetty",
                "Type": "Dentist",
                "Experience": "25 years experience overall",
                "Place":"Kalyan Nagar,Bangalore  Dental and Orthodontic Clinic",
                "Fee":"₹500 Consultation fee at clinic",
                "Image" :"https://imagesx.practo.com/providers/dr-ganesh-shetty-dentist-bangalore-99076776-8ead-45fd-813e-377e936f7465.jpg?i_type=t_100x100",
                "Rating" :"86%",
                "Stories":"33 Patient Stories",
                "Availability": " Available Today"
        },
        {
            
            "Name": "Dr. Ganesh Shetty",
            "Type": "Dentist",
            "Experience": "25 years experience overall",
            "Place":"Kalyan Nagar,Bangalore  Dental and Orthodontic Clinic",
            "Fee":"₹500 Consultation fee at clinic",
            "Image" :"https://imagesx.practo.com/providers/dr-ganesh-shetty-dentist-bangalore-99076776-8ead-45fd-813e-377e936f7465.jpg?i_type=t_100x100",
            "Rating" :"86%",
            "Stories":"33 Patient Stories",
            "Availability": " Available Today"
    },
    {
            
        "Name": "Dr. Ganesh Shetty",
        "Type": "Dentist",
        "Experience": "25 years experience overall",
        "Place":"Kalyan Nagar,Bangalore  Dental and Orthodontic Clinic",
        "Fee":"₹500 Consultation fee at clinic",
        "Image" :"https://imagesx.practo.com/providers/dr-ganesh-shetty-dentist-bangalore-99076776-8ead-45fd-813e-377e936f7465.jpg?i_type=t_100x100",
        "Rating" :"86%",
        "Stories":"33 Patient Stories",
        "Availability": " Available Today"
},

    ]
    return(
        <>
            <div className="d-flex flex-row" style={{margin:"30px 20px"}}>
                <div className="d-flex flex-column col-lg-7">
                    <Card>
                        <div>
                            <h4 style={{padding:'20px 40px'}}>3856 doctors available in Bangalore</h4>
                            <p style={{padding:'0px 40px',lineHeight:0.3}}>Book appointments with minimum wait-time & verified doctor details</p>
                        </div>
                        <hr />
                        <div className="d-flex flex-row" style={{marginTop:'20px'}}>
                            <div className="d-flex flex-column">
                                {
                                    docArr.map((item) =>{
                                        return(
                                            <>
                                                <div>
                                                    <img style={{margin:'30px 40px'}} src={item.Image} alt="" />
                                                    <p className="type">{item.Type}</p>
                                                </div>
                                            </> 
                                            )
                                        }

                                        )
                                    }
                            </div>
                            <div className="d-flex flex-column" style={{marginLeft:20}}>
                            {
                                    docArr.map((item) =>{
                                        return(
                                            <>
                                                <div style={{marginTop:30}}>
                                                   <h5>{item.Name}</h5>
                                                   <p style={{lineHeight:0.7}}>{item.Experience}</p>
                                                   <p style={{lineHeight:0.7}}>{item.Place}</p>
                                                   <p style={{lineHeight:0.7}}>{item.Fee}</p>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="d-flex flex-column">
                                                        <p style={{backgroundColor:'green',color:'white',marginTop:2,padding:"0px 10px 3px 10px"}}><span style={{marginRight:5}}>< BsHandThumbsUpFill color="white" /></span>{item.Rating}</p>
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <p style={{textDecoration:'underLine',paddingLeft:20}}>{item.Stories}</p>
                                                    </div>
                                                </div>
                                            </> 
                                            )
                                        }

                                        )
                                    }
                            </div>
                            <div className="d-flex flex-column">
                            {
                                    docArr.map((item) =>{
                                        return(
                                            <>
                                              <p style={{paddingLeft:20,color:'black !important',fontWeight:'bold',marginLeft:45,marginTop:90}}>{item.Availability}</p>  
                                              <button onClick={navigateAppointment} style={{background:'#0e3812',color:'white',border:'none',padding:'10px 20px',marginLeft:45,}}>Book Appointment</button>
                                            </> 
                                            )
                                        }

                                        )
                                    }
                               
                               
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="d-flex flex-column col-lg-1">
                    
                </div>
                <div className="d-flex flex-column col-lg-4">
                    <Card>
                        <form>
                            <h4 style={{padding:'10px 20px'}}>Book an appointment with the best doctors for your health needs</h4>
                                <div className="form-doctor">
                                    <input className="aliment" type="text" placeholder="Select Ailment" required/>
                                    <input className="aliment" type="text" placeholder="Name" required/>
                                    <input className="aliment" type="text" placeholder="Contact Number" required/>
                                    <input className="aliment" type="text" placeholder="Select City" required/>
                                    <p style={{cursor:'pointer'}} onClick={navigateAppointment} className="get">Get CostEstimate</p>
                                </div>
                        </form>
                    </Card>
                </div>

            </div>
        </>
    )
}
export default Available