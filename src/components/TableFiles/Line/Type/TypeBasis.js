import React from "react";
import "./TypeBasis.css"
const TypeBasis = (props) => {
    const TypeCap = {
        width: props.TypeCap+"px"
    }
    return (
        <div className="TypeBlok" style={TypeCap}>
            <div className="TypeOverflow">
                <div className="TypeText">{props.type}</div>
            </div>
        </div>
    );
};

export default TypeBasis;