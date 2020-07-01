import React from "react";
import DataBasis from "./Data/DataBasis";
import NameBasis from "./Name/NameBasis";
import TypeBasis from "./Type/TypeBasis";
import SizeBasis from "./Size/SizeBasis";
import "./Line.css"

const Line = (props) => (

    <div className="Line">
        <div>{props.name.data}</div>
        {/*<NameBasis name={props}/>*/}
        <DataBasis/>
        <TypeBasis/>
        <SizeBasis/>
    </div>

)

export default Line;