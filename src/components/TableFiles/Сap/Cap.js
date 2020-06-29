import React, {Component} from 'react';
import NameCap from "./Name/NameCap";
import DataCap from "./Data/DataCap"
import TypeCap from "./Type/TypeCap";
import SizeCap from "./Size/SizeCap";
//Код демонстрирует как можно выбрать все class в коде и их изменить
export default class Cap extends Component {
    onLabelClick = () => {
        const demoClasses = document.querySelectorAll('.NameBlok');

        demoClasses.forEach(element => {
            element.style.width = "150px";
        });
        // document.getElementById('NameBlok').style.width = "150px"

    };
    render() {
        return (
            <div id="Cap">
                <NameCap/>
                  <div onClick={this.onLabelClick} id="NameCapPartition"/>
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