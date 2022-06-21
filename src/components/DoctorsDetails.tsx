import "../styles.css";
import React from "react";
import { Link, useParams } from "react-router-dom";
import beyonce from "../beyonce.jpg";
import {UserContext, InterfaceDoctor,DoctorContextType} from "../contexts/UserContext";
export default function DoctorsDetails(){
    const { doctors } = React.useContext(UserContext) as DoctorContextType;
    const { id } = useParams();
    const index = doctors.findIndex(
    (doctor: InterfaceDoctor) => doctor.id == id 
    )
    const doctorUrl = "../BookAppointment/" + id;
    return(

    <div style={{paddingTop:"50px",paddingBottom:"30px"}}>
        <div style={{padding:"10px",maxWidth:"310px",margin:"auto"}} className="w3-border w3-round-xxlarge w3-white">
            <div className="w3-round-xxlarge" style={{maxWidth:"400px",margin:"auto"}}>
                <Link to="/"><p className="w3-padding"><i className="fa fa-arrow-left" aria-hidden="true"></i></p></Link>
                <img src={beyonce} style={{width:"100%", height:"auto"}} alt="shit">
                </img>
                <div style={{height:"50%",width:"100%"}} className="w3-round-xxlarge">
                    <div className="w3-padding">
                        <p className="w3-text-green">ONLINE NOW</p>
                        <h2>{doctors[index].name}</h2>
                        <p className="title"> {doctors[index].specialty}</p>
                        <p> {doctors[index].city}</p>
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