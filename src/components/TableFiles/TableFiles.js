import React, { Component } from "react";
import Line from "./Line/Line";
import Cap from "./Cap/Cap";

class TableFiles extends Component {
    constructor() {
        super();
        this.state = {
            line: [
                { name:'Документ', data: '17.05.2002', type:'Пустая папка',size: 15,id:1},
                { name:'Фаил', data: '17.05.2003', type:'Пустая папка',size: 15,id:2},
                { name:'текст', data: '17.05.2004', type:'Пустая папка',size: 15,id:3}
            ],
            DataCap: 300,
            NameCap: 300,
            SizeCap: 300,
            TypeCap: 300,
            DataCapMove: false
        }


         // document.body.addEventListener('click', foo, false);
    }

    test = () =>{this.setState({
        DataCapMove: true
    })
        window.addEventListener('mousemove', this.foo2, false);
        window.addEventListener('click', this.foo, false);
    };

    foo = () =>{
        window.removeEventListener('mousemove', this.foo2, false);
        window.removeEventListener('click', this.foo, false);
    };
    // foo1 = () =>{window.addEventListener('click', this.foo, false); };

    foo2 = () =>{console.log(event.pageY); };
    // foo4 = () =>{window.addEventListener('mousemove', this.foo2, false); };
    render() {
        // this.foo1();
        // this.foo4();
        return (
            <div id="TableFilesComponents">
                <div id="TFilesOverflow">
                    <Cap props={this.state} fun={this.test}/>
                    { this.state.line.map((props, index)=> {
                        return(
                            <Line
                                key={index}
                                props={props}
                                props2={this.state}
                            />
                        )
                    }) }
                </div>
            </div>
        );
    }
};

export default TableFiles;