import React, { Component }  from 'react';

import { Link } from "react-router-dom";
export default function Home(){
    return (
        <div className="content">
            <h1 className="text-3xl mt-4">Home</h1>
            <p>This protected page can only be access after login</p>
        </div>
    )
}