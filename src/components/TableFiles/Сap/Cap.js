import React from "react";
import NameCap from "./Name/NameCap";
import DataCap from "./Data/DataCap"
import TypeCap from "./Type/TypeCap";
import SizeCap from "./Size/SizeCap";

const Cap = () => {
    return (
        <div id = "Cap">
            <NameCap/>
               <div id="NameCapPartition"/>
            <DataCap/>
               <div id="DataCapPartition"/>
            <TypeCap/>
               <div id="TypeCapPartition"/>
            <SizeCap/>
               <div id="SizeCapPartition"/>
        </div>
    );
};

export default Cap;