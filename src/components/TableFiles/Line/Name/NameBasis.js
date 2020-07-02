import React from "react";
import "./NameBasis.css"

const NameBasis = (props) => {
    const NameBasisProps =props.props;
    return (
        <div className="NameBlok">
            <div className="NameOverflow">
                <img src="image/iconfinder.png" alt=""/>
                <div className="NameText">{NameBasisProps.name}</div>
            </div>
        </div>
    );
};
// <NameBasis name={props.props.name} width={props.props.DataCap}/>
export default NameBasis;