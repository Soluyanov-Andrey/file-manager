import React from "react";
import "./DataCap.css"
const DataCap = (props) => {
    console.log(props);
    return (
        <div className="DataCap">
            <div className="DataCapOverflow">
                <div className="DataCapText">&nbsp;Дата изменения</div>
            </div>
        </div>
    );
};

export default DataCap;