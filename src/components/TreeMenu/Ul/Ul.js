import React, { Component } from 'react';

const Ul = ({ items ,ext}) => {

    const p = (s) => {

          return false;
    }

    const WidthCap = {

    }

   return(
    <React.Fragment>
        <ul className="tree_menu_ul" >
            {items.map(n => (
                <li key = {n.adress} id = {n.adress} >
                    <div className="tree_menu_li_blok" onClick={()=>(ext(n.adress))} >
                        <img onClick={()=>(ext(n.adress))} className="tree_menu_li_side" src = {n.presence_сhild  ? "image/TreeMenu/arrow_side.png" : null}/>
                        <img className="tree_menu_li_folder" height="20px" width="15px" src="image/TreeMenu/folder.png"/>
                        {n.name}
                    </div>
                    {n.сhild && n.сhild.length && p() ? <Ul items={n.сhild} ext={ext} /> : null}

                </li>
            ))}
        </ul>
    </React.Fragment>

   )
};

export default Ul;



