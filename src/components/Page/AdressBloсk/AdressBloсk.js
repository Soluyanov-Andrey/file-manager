import React, {Component} from 'react';
import "./AdressBloсk.css"
const AdressBlock = () => {


    return (
        <React.Fragment>
            <div id="AdressBloсk">
                <div id="AdressBloсk_img">
                    <img src="image/AdressBlock/left.png" width="21" height="21" alt=""/>
                        <img src="image/AdressBlock/right.png" width="21" height="21" alt=""/>
                </div>
                <input id="AdressBloсk_input" type="text"/>
            </div>
        </React.Fragment>

    )
};

export default AdressBlock;