import React, { Component } from "react";
import Line from "./Line/Line";
import Cap from "./Cap/Cap";

class TableFiles extends Component {
    state = {
        line: [
            { name:'Документ', data: '17.05.2002', type:'Пустая папка',size: 15,id:1},
            { name:'Фаил', data: '17.05.2003', type:'Пустая папка',size: 15,id:2},
            { name:'текст', data: '17.05.2004', type:'Пустая папка',size: 15,id:3}
        ]
        // pageTitle: 'React components'
    }

    render() {
        return (
            <div id="TableFilesComponents">
                <div id="TFilesOverflow">
                    <Cap/>
                    { this.state.line.map((props, index)=> {
                        return(
                            <Line
                                key={index}
                                name={props.name}
                                data={props.data}
                                type={props.type}
                                size={props.size}
                                id={props.id}
                            />
                        )
                    }) }
                </div>
            </div>
        );
    }
};

export default TableFiles;