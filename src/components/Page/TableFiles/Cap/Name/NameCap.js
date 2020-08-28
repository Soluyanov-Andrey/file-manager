import React from "react";
import "./NameCap.css"
const NameCap = (props) => {
    const NameCap = {
        width: props.NameCap-7+"px"
    }
    return (
        <div className="NameCap" style={NameCap}>
            <div className="NameCapOverflow">
                <div className="NameCapText">&nbsp;Имя</div>
            </div>

        </div>

    );
};

export default NameCap;