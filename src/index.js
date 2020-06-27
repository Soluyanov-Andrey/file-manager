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
const DataTitle = () => {
    return (
        <div id="DataTitle">DataTitle</div>
    );
};

const DataBlok = () => {
    return (
        <div id="DataBlok">DataBlok</div>
    );
};

const DataParent = () => {
    return (
        <div id="DataParent">
            <DataTitle/>
            <DataBlok/>
        </div>
    );
};
//-----------------------------------
const TypeTitle = () => {
    return (
        <div id="TypeTitle">TypeTitle</div>
    );
};
const TypeBlok = () => {
    return (
        <div id="TypeBlok">TypeBlok</div>
    );
};
const TypeParent = () => {
    return (
        <div id="TypeParent">
            <TypeTitle/>
            <TypeBlok/>
        </div>
    );
};
//-----------------------------------
const SizeTitle = () => {
    return (
        <div id="SizeTitle">SizeTitle</div>
    );
};
const SizeBlok = () => {
    return (
        <div id="SizeBlok">SizeBlok</div>
    );
};
const SizeParent = () => {
    return (
        <div id="SizeParent">
            <SizeTitle/>
            <SizeBlok/>
        </div>
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
