import React, { Component } from 'react';
import './App.css';
import Table from "./Table/Table";
import Ss from "./ss";
const Comments = ({ items }) => (
    <React.Fragment>

        {items.map(n => (
            <ol className="comment" key={n.adress}>
                <Ss items={n.name} id= {n.adress}/>
                {n.сhild && n.сhild.length ? <Comments items={n.сhild} /> : null}
            </ol>
        ))}
    </React.Fragment>
);

class App extends React.Component {
    state = {
    "comments": [{
        "ico": "Папка",
        "name": "Архив",
        "type": "Папка",
        "adress": "0-1",
        "сhild": [{
            "ico": "Папка",
            "name": "Всякое",
            "type": "Папка",
            "adress": "0-1-1",
            "сhild": [{
                "ico": "Папка",
                "name": "Всякое",
                "type": "Папка",
                "adress": "0-1-1-1",
                "сhild": []
            }]
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
};

    render() {
        return (
            <div>
                <Comments items={this.state.comments} />
            </div>
        );
    }
}

export default App;


