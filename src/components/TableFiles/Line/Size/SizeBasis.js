import React from "react";
import "./SizeBasis.css"
const SizeBasis = (props) => {
    return (
        <div className="SizeBlok">
            <div className="SizeOverflow">
                <div className="SizeText">{props.size}</div>
            </div>
        </div>
    );
};

export default SizeBasis;