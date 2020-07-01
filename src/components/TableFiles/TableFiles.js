import React, { Component } from "react";
import Line from "./Line/Line";
import Cap from "./Cap/Cap";

class TableFiles extends Component {
    state = {
        line: [
            { name:'Документ', data: '17.05.2002', type:'Пустая папка',size: 15},
            { name:'Фаил', data: '17.05.2002', type:'Пустая папка',size: 15},
            { name:'текст', data: '17.05.2002', type:'Пустая папка',size: 15}
        ]
        // pageTitle: 'React components'
    }

    render() {
        return (
            <div id="TableFilesComponents">
                <div id="TFilesOverflow">
                    <Cap/>
                    { this.state.line.map((line_v, index)=> {
                        return(
                            <Line
                                key={index}
                                name={line_v.name}
                                data={line_v.data}
                                type={line_v.type}
                                size={line_v.size}
                            />
                        )
                    }) }
                </div>
            </div>
        );
    }
};

export default TableFiles;