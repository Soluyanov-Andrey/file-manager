import React, {Component} from 'react';
import NameCap from "./Name/NameCap";
import DataCap from "./Data/DataCap"
import TypeCap from "./Type/TypeCap";
import SizeCap from "./Size/SizeCap";
import "./Cap.css"
export default class Cap extends Component {
    constructor(props) {
        super();
        //вот так не работало
        // const DataCap = props.props.the_main[0].DataCap
       //а вот так работало
       //  this.DataCap = props.props.the_main[0].DataCap

    }

    onMouseDownNameCap = () =>{

        this.props.ext_function("NameCap");
    };
    onMouseDownDataCap = () =>{
        this.props.ext_function("DataCap");
    };
    onMouseDownTypeCap = () =>{
        this.props.ext_function("TypeCap");
    };
    onMouseDownSizeCap = () =>{
        this.props.ext_function("SizeCap");
    };

    render() {

        this.widthCap = {
            width: this.props.props.the_main[0].WidthCap
        }
        console.log(this.widthCap)
        return (
            <div id="Cap" style={this.widthCap}>
                <NameCap NameCap={this.props.props.the_main[0].NameCap}/>
                  <div id="NameCapPartition" onMouseDown={this.onMouseDownNameCap}/>
                <DataCap DataCap={this.props.props.the_main[0].DataCap}/>
                  <div id="DataCapPartition" onMouseDown={this.onMouseDownDataCap}/>
                <TypeCap/>
                  <div id="TypeCapPartition" onMouseDown={this.onMouseDownTypeCap}/>
                <SizeCap/>
                  <div id="SizeCapPartition" onMouseDown={this.onMouseDownSizeCap}/>
            </div>
        );
    }
};