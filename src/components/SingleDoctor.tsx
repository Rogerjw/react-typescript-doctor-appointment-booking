import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {UserContext, InterfaceDoctor} from "../contexts/UserContext";
type doctorsProps = {
    doctor: InterfaceDoctor
}
const SingleDoctor: React.FC<doctorsProps> = ({ doctor }) =>{
  const doctorUrl = "../DoctorsDetails/" + doctor.id;
  return (
    <React.Fragment> 
      <div style={{height:"70%"}} className="w3-padding">
        <Link to={doctorUrl}>
          <img src={doctor.profilePicture}
            className="w3-bar-item w3-circle w3-hide-small" alt="shit">
          </img>
        </Link>
        <div className="w3-bar-item " style={{textAlign: "left"}}>
          <b><span className="w3-xlarge">{doctor.name} </span><br></br></b>
          <div className="w3-text-grey"><span>{doctor.specialty}</span></div>
          <div className="w3-text-grey"><span>{doctor.city}</span></div>
        </div>
        <Link to={doctorUrl}>
          <button className="w3-btn w3-bar-item w3-right w3-margin w3-orange w3-text-white w3-round-xxlarge"> 
            Request Appointment
          </button>
        </Link>
      </div>
      <div className="w3-text-grey w3-bar-item w3-padding" style={{width:"100%",marginTop:"auto",height:"30%",textAlign:"right"}}><span>Phone: {doctor.phone}</span>&nbsp; &nbsp; &nbsp; &nbsp;Fax: <span>{doctor.phone}</span></div>
    </React.Fragment>
    );
}
export default SingleDoctor;