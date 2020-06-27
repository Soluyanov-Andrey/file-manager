import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//-----------------------------------
const NameTitle = () => {
    return (
        <div id="NameTitle">NameTitle</div>
    );
};
const NameBlok = () => {
    return (
        <div id="NameBlok">NameBlok</div>
    );
};
const NameParent = () => {
    return (
        <div id="NameParent">
            <NameTitle/>
            <NameBlok/>
        </div>
    );
};
//-----------------------------------

const DataParent = () => {
    return (
        <div id="DataParent">DataParent</div>
    );
};
//-----------------------------------
const TypeParent = () => {
    return (
        <div id="TypeParent">TypeParent</div>
    );
};
//-----------------------------------
const SizeParent = () => {
    return (
        <div id="SizeParent">SizeParent</div>
    );
};
const el = (
    <div id="TableFiles">
        <NameParent/>
        <DataParent/>
        <TypeParent/>
        <SizeParent/>

    </div>
)

ReactDOM.render(
    el,
    document.getElementById('root')
);
