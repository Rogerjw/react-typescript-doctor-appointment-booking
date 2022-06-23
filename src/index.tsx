import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
import UserContextProvider from "./contexts/UserContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorsDetails from "./components/DoctorsDetails"
import AdminDashboard from "./components/AdminDashboard";
import BookAppointment from "./components/BookAppointment"
import Layout from "./Layout"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <UserContextProvider>
      
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<App />} />
                <Route path="DoctorsDetails/:id" element={<DoctorsDetails />} />
                <Route path="AdminDashboard" element={<AdminDashboard />} />
                <Route path="BookAppointment/:id" element={<BookAppointment />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
