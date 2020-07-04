import React from "react";
import DataBasis from "./Data/DataBasis";
import NameBasis from "./Name/NameBasis";
import TypeBasis from "./Type/TypeBasis";
import SizeBasis from "./Size/SizeBasis";
import "./Line.css"

const Line = (props) => {
    const LineProps = props.line;
    // name: "Документ", data: "17.05.2002", type: "Пустая папка", size: 15, id: 1 }

    const The_Main = props.the_main;
    // { DataCap: 300, NameCap: 300, SizeCap: 300, TypeCap: 300 }

    return (
        <div className="Line" id={LineProps.id}>
            <NameBasis name={LineProps.name} NameCap={The_Main.NameCap}/>
            <DataBasis data={LineProps.data}/>
            <TypeBasis type={LineProps.type}/>
            <SizeBasis size={LineProps.size}/>
        </div>
    );
}

export default Line;