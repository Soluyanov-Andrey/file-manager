import React from "react";
import "./Ramka.css"
import { useSelector } from 'react-redux'

const Ramka = () => {
    const counter = useSelector(state => state)
    console.log({counter})
    return (
        <div className="Ramka" >
            <h4>44</h4>
        </div>
    );
};


export default Ramka
