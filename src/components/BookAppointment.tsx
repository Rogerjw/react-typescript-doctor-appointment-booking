import React,{useContext,useState} from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import {UserContext, EventContextType, SetEventType,DoctorContextType,InterfaceDoctor, PatientContextType} from "../contexts/UserContext";
import { Link, useParams, Navigate } from "react-router-dom";
import beyonce from "../beyonce.jpg";
function BookAppointment() {
  const { events } = useContext(UserContext) as EventContextType;
  const { setEvents } = useContext(UserContext) as SetEventType;
  const { doctors } = React.useContext(UserContext) as DoctorContextType;
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
    allDay: true,
    patient: {name:"", 
      surname:"",
      telephone:"",
      email:""},
  });
  const [name,setName] = useState("");
  const [surname,setSurname] = useState("");
  const [telephone,setTelephone] = useState("");
  const [email,setEmail] = useState("");

  const { id } = useParams();
    const index = doctors.findIndex(
    (doctor: InterfaceDoctor) => doctor.id == id 
    )

  function handleSubmit (event:React.SyntheticEvent) {
    event.preventDefault();
    newEvent.title = doctors[index].name;
    newEvent.patient.name = name;
    newEvent.patient.surname = surname;
    newEvent.patient.telephone = telephone;
    newEvent.patient.email = email; 
    setEvents([...events, newEvent]);
    alert("successfully booked");
    
    <Navigate to="../"></Navigate>
     
  };
  
   return (
      <div className="App">
       <div style={{paddingTop:"50px",paddingBottom:"30px"}}>
        <div style={{minHeight:"550px", width:"40%", margin:"auto",padding:"10px",maxWidth:"400px"}} className="w3-border w3-round-xxlarge w3-white">
        
        <div className="w3-round-xxlarge w3-lightgrey" style={{maxWidth:"400px",margin:"auto"}}>
          <Link to="/"><p className="w3-padding"><i className="w3-left fa fa-arrow-left" aria-hidden="true"> Back</i></p></Link>
          <div className="w3-margin-bottom">
            <div style={{border:"1px solid",minHeight:"100px"}}>
            <img src={beyonce} className="w3-bar-item w3-circle w3-hide-small w3-padding" alt="shit">
                </img>
              <p style={{display:"flex",flexDirection:"column"}}><h2>{doctors[index].name}</h2>{doctors[index].specialty}</p></div>
            
          </div>

          <form className="w3-container w3-border-0"
            onSubmit={handleSubmit} action="../">
            <i className="fa fa-address-card" aria-hidden="true"></i>
            <label>  Name</label>
            <input required id="name" className="w3-input w3-margin-bottom"
              onChange={event => setName(event.target.value)}
              type="text"/>
            <i className="fa fa-address-card" aria-hidden="true"></i>
            <label>  Surname</label>
            <input required id="name" className="w3-input w3-margin-bottom"
               onChange={event => setSurname(event.target.value)}
              type="text"/>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <label>  Telephone</label>
            <input name="telephone" value={telephone} required id="name" className="w3-input w3-margin-bottom"
              onChange={event => setTelephone(event.target.value)}
              type="text"/>
            <i className="fa fa-envelope"></i>
            <label>  Email</label>
            <input name="email" value={email} required id="name" className="w3-input w3-margin-bottom"
               onChange={event => setEmail(event.target.value)}
              type="email"/>
            <i className="fa fa-calendar" aria-hidden="true"></i>
            <label>  Start</label>
            <DatePicker className="w3-input w3-margin-bottom" placeholderText="Start Date" selected={newEvent.start} onChange={(start: Date) => setNewEvent({ ...newEvent, start })} />
            <i className="fa fa-calendar" aria-hidden="true"></i>
            <label>  End</label>
            <DatePicker className="w3-input w3-margin-bottom" placeholderText="End Date" selected={newEvent.end} onChange={(end: Date) => setNewEvent({ ...newEvent, end })} />
              <button className="w3-input w3-btn w3-blue w3-hover-dark-gray w3-margin-top" style={{ width:"100%",borderRadius: "0px 0px 25px 25px" }}> 
              BOOK AN APPOINTMENT</button>
          </form>
          </div>
        </div>
      </div>
     </div>
   );
 }

export default BookAppointment;