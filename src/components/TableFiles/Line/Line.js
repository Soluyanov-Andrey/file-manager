import React from "react";
import DataBasis from "./Data/DataBasis";
import NameBasis from "./Name/NameBasis";
import TypeBasis from "./Type/TypeBasis";
import SizeBasis from "./Size/SizeBasis";
import "./Line.css"

const Line = (props) => (

    <div className="Line">
        <NameBasis name={props.name}/>
        <DataBasis/>
        <TypeBasis/>
        <SizeBasis/>
    </div>

)

export default Line;