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
    render() {
        return (
            <div id="Cap">
                <NameCap/>
                  <div id="NameCapPartition"/>
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