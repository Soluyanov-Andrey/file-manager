import React from "react";
import './DataBasis.css'
const DataBasis = (props) => {

    const DataCap = {
        width: props.DataCap+"px"
    }

    return (
        <div className="DataBlok" style={DataCap}>
            <div className="DataOverflow">
                <div className="DataText">{props.data}</div>
            </div>
        </div>
    );
};

export default DataBasis;