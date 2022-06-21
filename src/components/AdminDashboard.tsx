import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Link } from "react-router-dom";
import 'reactjs-popup/dist/index.css';
import {UserContext, EventContextType, InterfaceEvent, InterfaceDoctor,DoctorContextType} from "../contexts/UserContext";



const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});
    

function AdminDashboard() {
    const [selectedEvent, setSelectedEvent] = useState<InterfaceEvent>()
    const [modalState, setModalState] = useState(false)
    const handleSelectedEvent = (event:InterfaceEvent) => {
        setSelectedEvent(event)
        setModalState(true)
    }
    const { doctors } = React.useContext(UserContext) as DoctorContextType;
    const index = doctors.findIndex(
        (doctor: InterfaceDoctor) => doctor.name == selectedEvent?.title 
        )
    const Modal = () => {
        return (
            <div className={`modal-${modalState == true ? 'show' : 'hide'}`} style={{marginRight:"10px"}}>
                <h1 className=" w3-xxlarge">{selectedEvent?.start.getDate()+"/"+selectedEvent?.start.getMonth()+"/"+selectedEvent?.start.getFullYear()}</h1>
                <div style={{display:"grid",gridTemplateRows:"1fr 60px 1fr"}}>
                    <div style={{gridColumnStart:"1",gridColumnEnd:"-1"}} className="w3-bar w3-margin-top w3-white"> 
                        <div style={{height:"70%"}} className="w3-padding">
                            <p>Doctor</p>
                            <img src={doctors[index].profilePicture}
                                className="w3-bar-item w3-circle w3-hide-small" alt="shit">
                            </img>
                            <div className="w3-bar-item " style={{textAlign: "left"}}>
                            <b><span className="w3-xlarge">{doctors[index].name} </span><br></br></b>
                            <div className="w3-text-grey"><span>{doctors[index].specialty}</span></div>
                            <div className="w3-text-grey"><span>{doctors[index].city}</span></div>
                            </div>
                            <i className="fa fa-check-circle-o w3-bar-item w3-right w3-text-green" style={{fontSize:"50px"}} aria-hidden="true"></i>
                        </div>
                        <div className="w3-text-grey w3-bar-item w3-padding" style={{width:"100%",marginTop:"auto",height:"30%",textAlign:"right"}}><span>Phone: {doctors[index].phone}</span>&nbsp; &nbsp; &nbsp; &nbsp;Fax: <span>{doctors[index].phone}</span></div>
                    </div> 
                    <div style={{gridColumnStart:"1",gridColumnEnd:"-1"}}>
                        <h1 className="w3-tag w3-green w3-text-white w3-round">Booked by <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i></h1>
                    </div>
                    <div style={{gridColumnStart:"1",gridColumnEnd:"-1"}} className="w3-bar w3-margin-top w3-white"> 
                        <div style={{height:"70%"}} className="w3-padding">
                        <p>Patient</p>
                        <i className="fa fa-user-circle w3-animate-zoom w3-left w3-bar-item" style={{fontSize:"60px",marginRight:"20px"}} aria-hidden="true"></i>
                            <div className="w3-bar-item" style={{textAlign: "left"}}>
                            <b><span className="w3-xlarge">{selectedEvent?.patient.name} {selectedEvent?.patient.surname}</span><br></br></b>
                            <div className="w3-text-grey"><i>{selectedEvent?.patient.email}</i></div>
                            </div>
                            
                        </div>
                        <div className="w3-text-grey w3-bar-item w3-padding" style={{width:"100%",marginTop:"auto",height:"30%",textAlign:"right"}}><span>Phone: {selectedEvent?.patient.telephone}</span>&nbsp; &nbsp; &nbsp; &nbsp;Fax: <span>{selectedEvent?.patient.telephone}</span></div>
                    </div>    
                </div>
            </div>
        )
    }
    const { events } = React.useContext(UserContext) as EventContextType;

    return (
        <div className="App" style={{display:"grid", gridTemplateColumns:"1fr 1fr", columnGap:"10px"}}>
        
        <div>
        <Link to="/" style={{textDecoration:"none"}}><p className="w3-padding w3-left"><i className="fa fa-arrow-left " aria-hidden="true"></i>&nbsp;Back</p></Link>
            <h1>Admin Calendar Month overview</h1>
            <Calendar onSelectEvent={(e) => handleSelectedEvent(e)} localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "10px" }} /> 
        </div>
        {selectedEvent && <Modal />} 
        </div>
    );
}

export default AdminDashboard;