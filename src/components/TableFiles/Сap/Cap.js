import React from "react";
import NameCap from "./Name/NameCap";
import DataCap from "./Data/DataCap"
import TypeCap from "./Type/TypeCap";
import SizeCap from "./Size/SizeCap";

const Cap = () => {
    return (
        <div id = "Cap">
            <NameCap/>
            <DataCap/>
            <TypeCap/>
            <SizeCap/>
        </div>
    );
};

export default Cap;