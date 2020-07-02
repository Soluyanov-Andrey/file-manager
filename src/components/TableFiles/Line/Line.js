import React from "react";
import DataBasis from "./Data/DataBasis";
import NameBasis from "./Name/NameBasis";
import TypeBasis from "./Type/TypeBasis";
import SizeBasis from "./Size/SizeBasis";
import "./Line.css"

const Line = (props) => (

    <div className="Line" id={props.props.id}>
        <NameBasis name={props.props.name}/>
        <DataBasis data={props.props.data}/>
        <TypeBasis type={props.props.type}/>
        <SizeBasis size={props.props.size}/>
    </div>

)

export default Line;