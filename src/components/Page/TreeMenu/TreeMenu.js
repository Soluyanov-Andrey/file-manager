import React, {Component} from "react";
import Ul from "./Ul/Ul";
import "./TreeMenu.css"
class TreeMenu extends Component {
    constructor() {
        super();
        this.state = {
            "knot": [{
                "ico": "Папка",
                "name": "главное меню",
                "type": "Папка",
                "adress": "0-1",
                "presence_сhild": true,
                "сhild": [{
                    "ico": "Папка",
                    "name": "База знаний",
                    "type": "Папка",
                    "adress": "0-1-1",
                    "presence_сhild":true,
                    "сhild": [{
                        "ico": "Папка",
                        "name": "Компоненты",
                        "type": "Папка",
                        "adress": "0-1-2",
                        "presence_сhild":false,
                        "сhild": []
                    },
                        {
                            "ico": "Папка",
                            "name": "Плагины",
                            "type": "Папка",
                            "adress": "0-1-22",
                            "presence_сhild":false,
                            "сhild": []
                        },
                        {
                            "ico": "Папка",
                            "name": "Модули",
                            "type": "Папка",
                            "adress": "0-1-23",
                            "presence_сhild":false,
                            "сhild": []
                        }]
                },
                    {
                        "ico": "Папка",
                        "name": "Отзывы",
                        "type": "Папка",
                        "adress": "0-1-25",
                        "presence_сhild":false,
                        "сhild": []
                    },
                    {
                        "ico": "Папка",
                        "name": "Контакты",
                        "type": "Папка",
                        "adress": "0-1-24",
                        "presence_сhild":false,
                        "сhild": []
                    }]
            },
                {
                    "ico": "Папка",
                    "name": "главное меню2",
                    "type": "Папка",
                    "adress": "0-2",
                    "presence_сhild":false,
                    "сhild": []
                }
            ],
            visible : {

            },


        }

    }

    add_node = (mostly_tree,s) => {

        if(s == undefined){  var s = { } }

        // //перебираем массив рекурсивно
        for (let i = 0; i <mostly_tree.length; i++){

            //нашли нужный адресс в дереве вставляем сhild
            if (mostly_tree[i].presence_сhild == true) {
                // console.log(mostly_tree[i].сhild[0].adress)
                s[mostly_tree[i].adress]= false;
                 this.add_node(mostly_tree[i].сhild,s)

            }


        }

        return s;
    }

    handleClick = (adress) => {

        let obj_visible = this.state.visible;
        //заполняем объект obj_visible в котором находяться адреса открытых сылок нужными параметрами
        if(obj_visible[adress] == false){ obj_visible[adress]= true } else { obj_visible[adress]= false }

          this.setState({visible : obj_visible})


    }
    componentWillMount(){
       let  per =this.add_node(this.state.knot);

        this.setState({ visible: per })

        //отменяет выпадение стандартного меню при нажатии правой кнопки.
        document.body.oncontextmenu = function (e) {
            // или так :
            return false;
            // или так :
            /* if (e) {
                    e.preventDefault();
                } else {
                    event.returnValue = false;
                }
            */
        };

    }

    componentDidMount(){
        console.log(this.state)
    }
    visible_blok1(){
        console.log("jjjj")
    }

    render() {
        return(

            <div id="TreeMenu">
                <div id="dd" onContextMenu={this.visible_blok1}>gggg</div>
                <div id="TreeMenu_blok">

                       <Ul items={this.state.knot} ext={this.handleClick} visible={this.state.visible}/>

                </div>
                <div id="TreeMenu_separator"></div>
            </div>
        )

    }
};

export default TreeMenu;