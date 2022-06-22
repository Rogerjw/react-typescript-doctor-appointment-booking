import "../styles.css";
import React from "react";
import { Link, useParams } from "react-router-dom";
import beyonce from "../assets/beyonce.jpg";
import {UserContext, InterfaceDoctor,DoctorContextType} from "../contexts/UserContext";
export default function DoctorsDetails(){
    const { doctors } = React.useContext(UserContext) as DoctorContextType;
    const { id } = useParams();
    const index = doctors.findIndex(
    (doctor: InterfaceDoctor) => doctor.id == id 
    )
    const doctorUrl = "../BookAppointment/" + id;
    const image = doctors[index].profilePicture
    return(

    <div style={{paddingTop:"50px",paddingBottom:"30px"}}>
        <div style={{padding:"10px",maxWidth:"310px",margin:"auto"}} className="w3-border w3-round-xxlarge w3-white">
            <div className="w3-round-xxlarge" style={{maxWidth:"300px",margin:"auto"}}>
                <Link to="/"><p className="w3-padding"><i className="fa fa-arrow-left" aria-hidden="true"></i></p></Link>
                <img src={beyonce} style={{width:"100%", height:"auto"}} alt="shit">
                </img>
                <div style={{width:"100%"}} className="w3-round-xxlarge">
                    <div className="w3-padding w3-light-grey">
                        <div className="w3-border-bottom">
                            <span className="w3-text-green"><strong>ONLINE NOW</strong></span>
                            <h2>{doctors[index].name}</h2>
                            <p className="title"> {doctors[index].specialty}</p>
                        </div>
                        <div className="w3-border-bottom">
                        <span className="w3-text-blue "><strong>GOOD REVIEWS</strong></span>
                        <div style={{display:"flex",width:"100%"}}>
                            <div className="w3-grey w3-round-xxlarge" style={{width:"100%",height:"10px"}}>
                            <div className="w3-blue w3-round-xxlarge" style={{height:"10px",width:"95%"}}></div>
                            </div><div className="w3-text-blue" style={{marginLeft:"5px"}}><strong>95</strong></div>
                        </div>
                        <span className="w3-text-blue"><strong>TOTAL SCORE</strong></span>
                        <div style={{display:"flex",width:"100%"}}>
                            <div className="w3-grey w3-round-xxlarge" style={{width:"100%",height:"10px"}}>
                            <div className="w3-blue w3-round-xxlarge" style={{height:"10px",width:"87%"}}></div>
                        </div><div className="w3-text-blue" style={{marginLeft:"5px",paddingBottom:"5px"}}><strong>87</strong></div>
                        </div>
                        <span className="w3-text-blue"><strong>SATISFACTION</strong></span>
                        <div style={{display:"flex",width:"100%"}}>
                            <div className="w3-grey w3-round-xxlarge" style={{width:"100%",height:"10px"}}>
                            <div className="w3-blue w3-round-xxlarge" style={{height:"10px",width:"90%"}}></div>
                            </div><div className="w3-text-blue" style={{marginLeft:"5px"}}><strong>90</strong></div>
                        </div>
                        
                        </div>
                        <div>
                            <h3>About </h3>
                            This doctor is a specialist 
                        </div>
                        
                </div>
                <Link to={doctorUrl}>
                    <button style={{width:"100%",borderRadius: "0px 0px 25px 25px"}} className="w3-btn w3-blue w3-round-xxlarge">BOOK AN APPOINTMENT</button>
                </Link>
                </div>
            </div>
        </div>
       
    </div>
    );
} 