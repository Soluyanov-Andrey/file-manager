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
    moving = (name_components) => {
        switch (name_components) {
            case 'NameCap':
                window.addEventListener('mousemove', this.changeNameCap, false);
                break;
            case 'DataCap':
                window.addEventListener('mousemove', this.changeDataCap, false);
                break;
            case 'SizeCap':
                window.addEventListener('mousemove', this.changeSizeCap, false);
                break;
            case 'TypeCap':
                window.addEventListener('mousemove', this.changeTypeCap, false);
                break;
            default:

        }

        window.addEventListener('click', this.moving_remove, false);
    };

    //Удалили перемещение
    moving_remove = () => {
        window.removeEventListener('mousemove', this.changeTypeCap, false);
        window.removeEventListener('mousemove', this.changeSizeCap, false);
        window.removeEventListener('mousemove', this.changeDataCap, false);
        window.removeEventListener('mousemove', this.changeNameCap, false);
        window.removeEventListener('click', this.moving_remove, false);
    };
    //Срабатывает при изменении NameCap
    changeNameCap = () => {
        this.setState({
            the_main: [{
                NameCap: event.pageX
            }
            ]
        })
    };
    //Срабатывает при изменении DataCap
    changeDataCap = () => {
        this.setState({
            the_main: [{
                DataCap: event.pageX
            }
            ]
        })
    };
    //Срабатывает при изменении SizeCap
    changeSizeCap = () => {
        this.setState({
            the_main: [{
                SizeCap: event.pageX
            }
            ]
        })
    };
    //Срабатывает при изменении TypeCap
    changeTypeCap = () => {
        this.setState({
            the_main: [{
                TypeCap: event.pageX
            }
            ]
        })
    };

    shouldComponentUpdate(nextProps, nextState) {

        console.log(nextState.the_main[0].DataCap);
        return true;

    }

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