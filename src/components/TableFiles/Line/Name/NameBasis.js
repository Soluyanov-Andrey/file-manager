import React from "react";
import "./NameBasis.css"

const NameBasis = (props) => {
    return (
        <div className="NameBlok">
            <div className="NameOverflow">
                <img src="image/iconfinder.png" alt=""/>
                <div className="NameText">{props.props.props.name}</div>
            </div>
        </div>
    );
};
// <NameBasis name={props.props.name} width={props.props.DataCap}/>
export default NameBasis;