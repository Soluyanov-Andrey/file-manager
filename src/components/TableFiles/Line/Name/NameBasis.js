import React from "react";
import "./NameBasis.css"

const NameBasis = (props) => {

    const TodoComponent = {
        width: props.NameCap+"px"
    }
    return (
        <div className="NameBlok" style={TodoComponent}>
            <div className="NameOverflow">
                <img src="image/iconfinder.png" alt=""/>
                <div className="NameText">{props.name}</div>
            </div>
        </div>
    );
};
// <NameBasis name={props.props.name} width={props.props.DataCap}/>
export default NameBasis;