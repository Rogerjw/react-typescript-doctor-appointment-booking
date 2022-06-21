import React,{useContext} from "react";
import SingleDoctor from "./SingleDoctor";
import {UserContext, DoctorContextType} from "../contexts/UserContext";

export default function DoctorList() {
  const { doctors } = React.useContext(UserContext) as DoctorContextType;
  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", columnGap:"30px"}}>
      {
        doctors.map((doctor)=>
          <div className="w3-bar w3-margin-top w3-white" >
            <SingleDoctor key={doctor.id} doctor={doctor} />
          </div>
        )
      }
    </div>
  );
  
}
