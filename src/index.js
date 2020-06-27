import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


const HomeParent=()=>{
    return(
        <div id="HomeParent">HomeParent</div>
    );
};

const DataParent=()=>{
    return(
        <div id="DataParent">DataParent</div>
    );
};

const TypeParent=()=>{
    return(
        <div id="TypeParent">TypeParent</div>
    );
};

const SizeParent=()=>{
    return(
        <div id="SizeParent">SizeParent</div>
    );
};
const el = (
    <div>
        <HomeParent/>
        <DataParent/>
        <TypeParent/>
        <SizeParent/>
    </div>
)

ReactDOM.render(
    el,
  document.getElementById('root')
);
