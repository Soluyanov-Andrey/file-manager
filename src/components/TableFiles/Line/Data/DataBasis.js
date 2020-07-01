import React from "react";
import './DataBasis.css'
const DataBasis = (props) => {
    return (
        <div className="DataBlok">
            <div className="DataOverflow">
                <div className="DataText">{props.data}</div>
            </div>
        </div>
    );
};

export default DataBasis;