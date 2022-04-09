import React, { Component }  from 'react';
import useToken from '../useToken';
import { Link } from "react-router-dom";

export default function Protected(){

    return (
        <div className="content">
            <h1 className="text-3xl mt-4">Protected</h1>
            <p>This protected page can only be access after login</p>
            
        </div>
    )
}