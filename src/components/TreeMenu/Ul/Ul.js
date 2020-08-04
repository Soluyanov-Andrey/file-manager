import React, { Component } from 'react';
import './App.css';

import Li from "./Li/Li";
const Ul = ({ items }) => (
    <React.Fragment>

        {items.map(n => (
            <ol className="comment" key={n.adress}>
                <Li items={n.name} id= {n.adress}/>
                {n.сhild && n.сhild.length ? <Comments items={n.сhild} /> : null}
            </ol>
        ))}
    </React.Fragment>
);

export default Ul;