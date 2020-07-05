import React from "react";
import "./DataCap.css"
const DataCap = (props) => {
    const DataCap = {
        width: props.DataCap-7+"px"
    }
    return (
        <div className="DataCap" style={DataCap}>
            <div className="DataCapOverflow">
                <div className="DataCapText">&nbsp;Дата изменения</div>
            </div>
        </div>
    );
};

export default DataCap;