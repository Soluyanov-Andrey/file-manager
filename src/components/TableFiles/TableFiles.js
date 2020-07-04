import React, {Component} from "react";
import Line from "./Line/Line";
import Cap from "./Cap/Cap";

class TableFiles extends Component {
    constructor() {
        super();
        this.position_mouse = 0;
        this.activity_mouse = false;

        this.state = {
            line: [
                {name: 'Документ', data: '17.05.2002', type: 'Пустая папка', size: 15, id: 1},
                {name: 'Фаил', data: '17.05.2003', type: 'Пустая папка', size: 15, id: 2},
                {name: 'текст', data: '17.05.2004', type: 'Пустая папка', size: 15, id: 3}
            ],
            WidthCap: 1250,
            DataCap: 300,
            NameCap: 300,
            SizeCap: 300,
            TypeCap: 300

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
        this.activity_mouse = false
        window.removeEventListener('mousemove', this.changeTypeCap, false);
        window.removeEventListener('mousemove', this.changeSizeCap, false);
        window.removeEventListener('mousemove', this.changeDataCap, false);
        window.removeEventListener('mousemove', this.changeNameCap, false);
        window.removeEventListener('click', this.moving_remove, false);
    };

// возвращает значение -1 -2 +1 +2 в зависимости от того на сколько здвинулся курсор мыши
    mausemove = (callback) => {
        if (this.activity_mouse === false) {
            this.activity_mouse = true;
            this.position_mouse = event.pageX;
        } else {
            if (event.pageX < this.position_mouse) {
                let position_mouse_memory = event.pageX
                let result = this.position_mouse - position_mouse_memory
                this.position_mouse = position_mouse_memory
                return callback(-result)
            }
            if (event.pageX > this.position_mouse) {
                let position_mouse_memory = event.pageX
                let result = position_mouse_memory - this.position_mouse
                this.position_mouse = position_mouse_memory
                return callback(result)
            }
        }


        this.maus = event.pageX
    }

    NameCapСallback = (value) => {
        this.setState({
            WidthCap: this.state.WidthCap + value,
            NameCap: this.state.NameCap + value
        })
    }

    DataCapСallback = (value) => {
        this.setState({
            WidthCap: this.state.WidthCap + value,
            DataCap: this.state.DataCap + value
        })
    }

    TypeCapСallback = (value) => {
        this.setState({
            WidthCap: this.state.WidthCap + value,
            TypeCap: this.state.TypeCap + value
        })
    }

    SizeCapСallback = (value) => {
        this.setState({
            WidthCap: this.state.WidthCap + value,
            SizeCap: this.state.SizeCap + value
        })
    }

    //Срабатывает при изменении NameCap
    changeNameCap = () => {
        this.mausemove(this.NameCapСallback)

    };

    //Срабатывает при изменении DataCap
    changeDataCap = () => {
        this.mausemove(this.DataCapСallback)
    };

    //Срабатывает при изменении TypeCap
    changeTypeCap = () => {
        this.mausemove(this.TypeCapСallback)
    };

    //Срабатывает при изменении SizeCap
    changeSizeCap = () => {
        this.mausemove(this.SizeCapСallback)
    };


    render() {
        // console.log(this.state);
        return (
            <div id="TableFilesComponents">
                <div id="TFilesOverflow">
                    <Cap props={this.state} ext_function={this.moving}/>
                    {this.state.line.map((props, index) => {
                        return (
                            <Line
                                key={index}
                                line={props}
                                DataCap={this.state.DataCap}
                                NameCap={this.state.NameCap}
                                SizeCap={this.state.SizeCap}
                                TypeCap={this.state.TypeCap}
                                WidthCap={this.state.WidthCap}
                            />
                        )
                    })}
                </div>
            </div>
        );
    }
};

export default TableFiles;