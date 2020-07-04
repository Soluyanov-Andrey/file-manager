import React from "react";
import DataBasis from "./Data/DataBasis";
import NameBasis from "./Name/NameBasis";
import TypeBasis from "./Type/TypeBasis";
import SizeBasis from "./Size/SizeBasis";
import "./Line.css"

const Line = (props) => {
    const LineProps = props.line;
    // name: "Документ", data: "17.05.2002", type: "Пустая папка", size: 15, id: 1 }

    return (
        <div className="Line" id={LineProps.id}>
            <NameBasis name={LineProps.name} NameCap={props.NameCap}/>
            <DataBasis data={LineProps.data} DataCap={props.DataCap}/>
            <TypeBasis type={LineProps.type} TypeCap={props.TypeCap}/>
            <SizeBasis size={LineProps.size} SizeCap={props.SizeCap}/>
        </div>
    );
}

export default Line;