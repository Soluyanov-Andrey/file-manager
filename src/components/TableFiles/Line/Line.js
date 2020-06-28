import React from "react";
import DataBasis from "./Data/DataBasis";
import NameBasis from "./Name/NameBasis";
import TypeBasis from "./Type/TypeBasis";
import SizeBasis from "./Size/SizeBasis";

const Line = () => {
    return (
        <div className="Line">
          <NameBasis/>
            <DataBasis/>
            <TypeBasis/>
            <SizeBasis/>
        </div>
    );
};

export default Line;