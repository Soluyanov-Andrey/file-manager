import React from "react";
import './DataBasis.css'
const DataBasis = (props) => {
    console.log(props)
    return (
        <div className="DataBlok" width={props}>
            <div className="DataOverflow">
                <div className="DataText">{props.data}</div>
            </div>
        </div>
    );
};

export default DataBasis;