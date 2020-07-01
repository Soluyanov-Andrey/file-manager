import React from "react";
import "./NameBasis.css"

const NameBasis = (props) => {
    return (
        <div className="NameBlok">
            <div className="NameOverflow">
                <img src="image/iconfinder.png" alt=""/>
                <div className="NameText">{props.name}</div>
            </div>
        </div>
    );
};

export default NameBasis;