import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import NameParent from './components/NameParent/NameParent';
import DataParent from './components/DataParent/DataParent';
import TypeParent from './components/TypeParent/TypeParent';
import SizeParent from './components/SizeParent/SizeParent';

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
