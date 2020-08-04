import React, {Component} from "react";

class TreeMenu extends Component {
    constructor() {
        super();
        this.state = {
            "knot": [{
                "ico": "Папка",
                "name": "Архив",
                "type": "Папка",
                "adress": "0-1",
                "сhild": [{
                    "ico": "Папка",
                    "name": "Всякое",
                    "type": "Папка",
                    "adress": "0-1-1",
                    "сhild": []
                },
                    {
                        "ico": "Папка",
                        "name": "Всякое",
                        "type": "Папка",
                        "adress": "0-1-2",
                        "сhild": []
                    }]
            },
                {
                    "ico": "Папка",
                    "name": "Всякое",
                    "type": "Папка",
                    "adress": "0-2",
                    "сhild": []
                }
            ]

        }

    }


    render() {
        return(<div>kjj</div>)

    }
};

export default TreeMenu;