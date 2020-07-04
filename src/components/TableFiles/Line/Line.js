import React from "react";
import DataBasis from "./Data/DataBasis";
import NameBasis from "./Name/NameBasis";
import TypeBasis from "./Type/TypeBasis";
import SizeBasis from "./Size/SizeBasis";
import "./Line.css"

const Line = (props) => {
   const LineProps =props.props;

    return (
        <div className="Line" id={LineProps.id}>
            <NameBasis props={LineProps} the_main={props.the_main}/>
            <DataBasis data={props.props.data}/>
            <TypeBasis type={props.props.type}/>
            <SizeBasis size={props.props.size}/>
        </div>
    );
}

export default Line;