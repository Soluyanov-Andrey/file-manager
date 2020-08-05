import React, { Component } from 'react';

const Ss = ({ items ,id}) => {

    return (
        <React.Fragment>
            <li id = {id}>
                <div className="tree_menu_li_blok">
                <img className="tree_menu_li_side" src="img/arrow_side.png"/>
                <img className="tree_menu_li_folder" height="20px" width="15px" src="img/folder.png"/>
                    {items}
                </div>

            </li>


        </React.Fragment>
    );
};
export default Ss;