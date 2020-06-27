import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


const Home=()=>{
    return(
        <div id="Home">My Todo list</div>
    );
};

const Data=()=>{
    return(
        <div id="Type">My Todo list</div>
    );
};

const Type=()=>{
    return(
        <div id="Type">My Todo list</div>
    );
};

const Size=()=>{
    return(
        <div id="Size">My Todo list</div>
    );
};
const el = (
    <div>
        <Home/>
        <Data/>
        <Type/>
        <Size/>
    </div>
)

ReactDOM.render(
    el,
  document.getElementById('root')
);
