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

            WidthCap: 1300,
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


    mausemove = (changeNameCap2) => {

        console.log("mov-"+this.state)
        if(this.activity_mouse == false){
            console.log(this.activity_mouse)
            this.activity_mouse = true;
            this.position_mouse = event.pageX;
            console.log("poz"+this.position_mouse)
        } else {
            if(event.pageX < this.position_mouse){
                console.log("position_mouse"+(this.position_mouse))
                console.log("event.pageX"+(event.pageX))
                let position_mouse2 = event.pageX
                let po=this.position_mouse-position_mouse2
                this.position_mouse = position_mouse2
                console.log(">"+(-po))
                 return changeNameCap2(-po)

                // let s = this.position_mouse
                // this.position_mouse = this.position_mouse-event.pageX
                //  console.log("s"+s)
                //  console.log("this.position_mouse"+(this.position_mouse))
                // return this.position_mouse = this.position_mouse-event.pageX
            }
            if(event.pageX>this.position_mouse){
                let position_mouse2 = event.pageX
                let po=position_mouse2-this.position_mouse
                this.position_mouse = position_mouse2
                console.log(">"+(po))
                return changeNameCap2(po)
            }
        }


        this.maus=event.pageX
    }
    mausemove1 = (n) => {

        console.log("fff44-"+n)
    }
    // showMessage() {
    //     alert(this.state.WidthCap);
    // }
    //Срабатывает при изменении NameCap

    changeNameCap2 = (a) => {
        let b1 = this.state.NameCap

        console.log("fff-"+b1)
        this.setState({

            NameCap: b1+a
        })
    }



    changeNameCap = () => {
        //this.showMessage();
        this.mausemove(this.changeNameCap2)

    };
    //Срабатывает при изменении DataCap
    changeDataCap = () => {
        let b = this.state.WidthCap + 1
        // console.log(b);
        this.setState({
            DataCap: b
        })
    };
    //Срабатывает при изменении SizeCap
    changeSizeCap = () => {
        this.setState({
            SizeCap: event.pageX
        })
    };
    //Срабатывает при изменении TypeCap
    changeTypeCap = () => {
        this.setState({
            TypeCap: event.pageX

        })
    };

    shouldComponentUpdate(nextProps, nextState) {

        // console.log(nextState);
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
                                DataCap={this.state.DataCap}
                                NameCap={this.state.NameCap}
                                SizeCap={this.state.SizeCap}
                                TypeCap={this.state.TypeCap}
                    />
                    )
                    })}
                </div>
            </div>
        );
    }
};

export default TableFiles;