import React, { Component } from 'react';
import Li from "./Li/Li";
const Ul = ({ items }) => (
    <React.Fragment>
        <ul className="tree_menu_ul" >
        {items.map(n => (
                    <li key = {n.adress} id = {n.adress} >
                        <div className="tree_menu_li_blok" >
                            <img className="tree_menu_li_side" src = {n.presence_сhild  ? "image/TreeMenu/arrow_side.png" : null}/>
                            <img className="tree_menu_li_folder" height="20px" width="15px" src="image/TreeMenu/folder.png"/>
                            {n.name}
                        </div>
                        {n.сhild && n.сhild.length ? <Ul items={n.сhild} /> : null}

                    </li>
        ))}
        </ul>
    </React.Fragment>
);

export default Ul;