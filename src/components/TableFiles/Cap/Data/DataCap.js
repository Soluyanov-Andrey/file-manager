import React from "react";
import "./DataCap.css"
const DataCap = (props) => {
    const DataCap = {
        width: props.DataCap+"px"
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