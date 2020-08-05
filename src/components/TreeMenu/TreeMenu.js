import React, {Component} from "react";
import Ul from "./Ul/Ul";

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
                            "adress": "0-1-2",
                            "presence_сhild":false,
                            "сhild": []
                        },
                        {
                            "ico": "Папка",
                            "name": "Модули",
                            "type": "Папка",
                            "adress": "0-1-2",
                            "presence_сhild":false,
                            "сhild": []
                        }]
                },
                    {
                        "ico": "Папка",
                        "name": "Отзывы",
                        "type": "Папка",
                        "adress": "0-1-2",
                        "presence_сhild":false,
                        "сhild": []
                    },
                    {
                        "ico": "Папка",
                        "name": "Контакты",
                        "type": "Папка",
                        "adress": "0-1-2",
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
            ]

        }

    }


    render() {
        return(
            <div id="tree_menu">
                <div id="tree_menu_blok">

                       <Ul items={this.state.knot} />

                </div>
                <div id="tree_menu_separator"></div>
            </div>
        )

    }
};

export default TreeMenu;