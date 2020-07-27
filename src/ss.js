import React, { Component } from 'react';

const Ss = ({ items ,id}) => {

    return (
        <React.Fragment>

            <li id={id}>
                <span>+</span>
                <span><img/></span>
                <span>{ items }</span>

            </li>


        </React.Fragment>
    );
};
export default Ss;