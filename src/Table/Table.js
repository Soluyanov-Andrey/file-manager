import React from "react";
import "./Table.css"
import Ramka from "./Ramka/Ramka"
const Table = (props) => {
    // const TypeCap = {
    //     width: props.TypeCap+"px"
    // }
    // console.log(props)
    return (
        <div className="Table" >
           <Ramka/>
        </div>
    );
};

export default Table;