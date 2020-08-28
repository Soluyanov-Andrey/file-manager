import React from "react";
import "./TypeCap.css"
const TypeCap = (props) => {
    const TypeCap = {
        width: props.TypeCap-7+"px"
    }
    return (
        <div className="TypeCap" style={TypeCap}>
            <div className="TypeCapOverflow">
                <div className="TypeCapText">&nbsp;Тип</div>

            </div>
        </div>
    );
};

export default TypeCap;