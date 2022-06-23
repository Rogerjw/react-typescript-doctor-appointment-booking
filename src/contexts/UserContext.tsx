import * as React from "react";
export interface InterfaceDoctor {
    id: number | string;
    profilePicture: string;
    name: string;
    specialty: string;
    city: string;
    phone: string;
}
export interface InterfaceEvent {
    id: number | string;
    title: string | undefined;
    start: Date;
    end: Date;
    allDay: boolean;
    patient: InterfacePatient;
}
export interface InterfacePatient {
    name: string;
    surname: string;
    telephone: string;
    email: string;
}
export type PatientContextType = {
    patients: InterfacePatient[];
}
export type DoctorContextType = {
    doctors: InterfaceDoctor[];
}
export type EventContextType = {
    events: InterfaceEvent[];
}
export type SetEventType = {
    setEvents: React.Dispatch<React.SetStateAction<InterfaceEvent | undefined>[]>
}
export type SetPatientType = {
    setPatients: React.Dispatch<React.SetStateAction<InterfacePatient | undefined>[]>
}
export type handleCancelType = any;
export const UserContext = React.createContext<DoctorContextType | EventContextType | PatientContextType | SetEventType | handleCancelType | null>(null);