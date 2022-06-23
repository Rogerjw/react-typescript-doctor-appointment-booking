import React, { useState } from "react";
import { UserContext } from "./UserContext";

type Props = {
    children?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
};

const UserContextProvider: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({ children }: any) =>{
    const [events, setEvents] = useState([
        {
            id:0,
            title: "Mark Musco",
            start: new Date(2022, 5, 18),
            end: new Date(2022, 5, 19),
            allDay: true,
            patient: {
                name:"Roger", 
                surname:"Badass",
                telephone:"0781870110",
                email:"rogermuhire@gmail.com"
            }
        },
    ]);
    const doctors = [
        {
            id : 0,
            profilePicture: "assets/saschafirtina.jpg",
            name: 'Brian J. McGuinness',
            specialty: 'Colon and Rectal surgery',
            city: "Walnut Creek",
            phone: "925-274-9004"
        },
        {
            id : 1,
            profilePicture: "assets/marin.ivankovic.jpg",
            name: 'Joshua Logan',
            specialty: 'Urology',
            city: "Walnut Creek",
            phone: "925-274-9004"
        },
        {
            id : 2,
            profilePicture: "assets/bluemaex.jpg",
            name: 'David H.Lin ',
            specialty: 'Gastroentoroly',
            city: "Danville",
            phone: "925-274-9004"
        },
        {
            id : 3,
            profilePicture: "assets/kanyewest.jpg",
            name: 'Mark Musco',
            specialty: 'Family Medecine',
            city: "San Ramon",
            phone: "925-274-9004"
        },
        {
            id : 4,
            profilePicture: "assets/jxhannamadeleine.jpg",
            name: 'Alex A. Asian',
            specialty: 'Gastroentoroly ',
            city: "Antioch  | Concord",
            phone: "925-274-000"
        },
        {
            id : 5,
            profilePicture: "assets/beyonce.jpg",
            name: 'Philip C. Yee',
            specialty: 'Gastroentoroly',
            city: "San Ramon | Livermore",
            phone: "925-274-000"
        }
    ];
    function handleCancel(id: number){
        setEvents(events.filter(event => event.id !== id));
    }
    const value = {
        doctors,
        events,
        setEvents,
        handleCancel
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
};

export default UserContextProvider;
