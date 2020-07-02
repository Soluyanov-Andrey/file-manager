import React, {Component} from 'react';
import NameCap from "./Name/NameCap";
import DataCap from "./Data/DataCap"
import TypeCap from "./Type/TypeCap";
import SizeCap from "./Size/SizeCap";
import "./Cap.css"
export default class Cap extends Component {
    constructor(props) {
        super();
        console.log(props.props.DataCap);
    }

    onMouseDown = () =>{
        console.log("конпка мышы нажата");
        this.props.fun();
    };
    onMouseUp = () =>{
        console.log("Кнопка мыши отпущена над элементом");
    };

    render() {
        return (
            <div id="Cap">
                <NameCap/>
                  <div id="NameCapPartition" onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}/>
                <DataCap/>
                  <div id="DataCapPartition"/>
                <TypeCap/>
                  <div id="TypeCapPartition"/>
                <SizeCap/>
                  <div id="SizeCapPartition"/>
            </div>
        );
    }
};