import React from "react";
import "./Table.css"
import Ramka from "./Ramka/Ramka"
const Table = (data) => {

        const { id, parentId, name, children } = data;

        return (
            <div>
                <b>Id: {id}</b>
                <span>name: {name}</span>
                {
                    children &&
                    children.map((i, n) => <Table data={i} key={n} />)
                }
            </div>
        );
    };


export default Table;