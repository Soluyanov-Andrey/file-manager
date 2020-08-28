import React from "react";
import "./SizeBasis.css"
const SizeBasis = (props) => {
    const SizeCap = {
        width: props.SizeCap+"px"
    }
    return (
        <div className="SizeBlok" style={SizeCap}>
            <div className="SizeOverflow">
                <div className="SizeText">{props.size}</div>
            </div>
        </div>
    );
};

export default SizeBasis;