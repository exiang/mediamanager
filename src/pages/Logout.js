import React, { useState }  from 'react';
import { BrowserRouter, Link, Navigate, useNavigate, Route, Routes } from "react-router-dom";
import Login from '../pages/Login'

export default function Logout(){
    localStorage.clear();
    window.location.href = '/';
    
    //const navigate = useNavigate();
    //navigate('/login', { replace: true });
   
    return (
        <div className="App">
            <p>Logging out...</p>
        </div>
    )
}
