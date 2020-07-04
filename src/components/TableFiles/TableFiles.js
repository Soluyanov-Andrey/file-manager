import React, {Component} from "react";
import Line from "./Line/Line";
import Cap from "./Cap/Cap";

class TableFiles extends Component {
    constructor() {
        super();
        this.state = {
            line: [
                {name: 'Документ', data: '17.05.2002', type: 'Пустая папка', size: 15, id: 1},
                {name: 'Фаил', data: '17.05.2003', type: 'Пустая папка', size: 15, id: 2},
                {name: 'текст', data: '17.05.2004', type: 'Пустая папка', size: 15, id: 3}
            ],
            the_main: [{
                DataCap: 300,
                NameCap: 300,
                SizeCap: 300,
                TypeCap: 300
            }
            ]
        }

    }

    //Добавили перемещение
    moving = () => {
        window.addEventListener('mousemove', this.changeState, false);
        window.addEventListener('click', this.moving_remove, false);
    };

    //Удалили перемещение
    moving_remove = () => {
        window.removeEventListener('mousemove', this.changeState, false);
        window.removeEventListener('click', this.moving_remove, false);
    };

    changeState = () => {
        this.setState({
            the_main: [{
                NameCap: event.pageX
            }
            ]
        })
    };

    render() {
        return (
            <div id="TableFilesComponents">
                <div id="TFilesOverflow">
                    <Cap props={this.state} ext_function={this.moving}/>
                    {this.state.line.map((props, index) => {
                        return (
                            <Line
                                key={index}
                                line={props}
                                the_main={this.state.the_main[0]}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
};

export default TableFiles;