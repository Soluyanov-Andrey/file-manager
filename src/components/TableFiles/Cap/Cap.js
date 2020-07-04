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
        const WidthCap = {
            width: this.props.props.WidthCap+"px"
        }

        return (
            <div id="Cap" style={WidthCap}  >
                <NameCap NameCap={this.props.props.NameCap}/>
                  <div id="NameCapPartition" onMouseDown={this.onMouseDownNameCap}/>
                <DataCap DataCap={this.props.props.DataCap}/>
                  <div id="DataCapPartition" onMouseDown={this.onMouseDownDataCap}/>
                <TypeCap TypeCap={this.props.props.TypeCap}/>
                  <div id="TypeCapPartition" onMouseDown={this.onMouseDownTypeCap}/>
                <SizeCap SizeCap={this.props.props.SizeCap}/>
                  <div id="SizeCapPartition" onMouseDown={this.onMouseDownSizeCap}/>
            </div>
        );
    }
};