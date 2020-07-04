import React from "react";
import "./SizeCap.css"

const SizeCap = (props) => {
    const SizeCap = {
        width: props.SizeCap+"px"
    }

    return (
        <div className="SizeCap" style={SizeCap}>
            <div className="SizeCapOverflow">
                <div className="SizeCapText">&nbsp;Размер</div>
            </div>
        </div>
    );
};

export default SizeCap;