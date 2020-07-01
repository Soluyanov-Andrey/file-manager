import React from "react";
import "./TypeBasis.css"
const TypeBasis = (props) => {
    return (
        <div className="TypeBlok">
            <div className="TypeOverflow">
                <div className="TypeText">{props.type}</div>
            </div>
        </div>
    );
};

export default TypeBasis;