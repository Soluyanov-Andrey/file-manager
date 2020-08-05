import React, { Component } from 'react';
import Li from "./Li/Li";
const Ul = ({ items }) => (
    <React.Fragment>
        <ul class="tree_menu_ul">
        {items.map(n => (

                <React.Fragment>

                    <li id = {n.adress}>
                        <div className="tree_menu_li_blok">
                            <img className="tree_menu_li_side" src={n.presence_сhild  ? "image/TreeMenu/arrow_side.png" : null}/>
                            <img className="tree_menu_li_folder" height="20px" width="15px" src="image/TreeMenu/folder.png"/>
                            {n.name}
                        </div>
                        {n.сhild && n.сhild.length ? <Ul items={n.сhild} /> : null}

                    </li>


                {/*<Li items={n.name} id= {n.adress}/>*/}

                </React.Fragment>


        ))}
        </ul>
    </React.Fragment>
);

export default Ul;