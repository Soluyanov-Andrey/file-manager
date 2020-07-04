import React from "react";
import "./NameBasis.css"

const NameBasis = (props) => {
    const NameBasisProps =props.props;
    const TodoComponent = {
        width: "300px",
        float:"left",
        overflow: "hidden"
    }
    return (
        <div className="NameBlok" style={TodoComponent}>
            <div className="NameOverflow">
                <img src="image/iconfinder.png" alt=""/>
                <div className="NameText">{NameBasisProps.name}</div>
            </div>
        </div>
    );
};
// <NameBasis name={props.props.name} width={props.props.DataCap}/>
export default NameBasis;