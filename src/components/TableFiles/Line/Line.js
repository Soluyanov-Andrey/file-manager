import React from "react";
import DataBasis from "./Data/DataBasis";
import NameBasis from "./Name/NameBasis";
import TypeBasis from "./Type/TypeBasis";
import SizeBasis from "./Size/SizeBasis";
import "./Line.css"

const Line = (props) => (

    <div className="Line" id={props.id}>
        <NameBasis name={props.name}/>
        <DataBasis data={props.data}/>
        <TypeBasis type={props.type}/>
        <SizeBasis size={props.size}/>
    </div>

)

export default Line;