import React, { Component } from 'react';
import './App.css';
import Table from "./Table/Table";
const Comments = ({ items }) => (
    <React.Fragment>
        {items.map(n => (
            <div className="comment" key={n.id}>
                <h3>{n.name}</h3>
                <div>{n.body}</div>
                {n.reply && n.reply.length ? <Comments items={n.reply} /> : null}
            </div>
        ))}
    </React.Fragment>
);

class App extends React.Component {
    state = {
        "comments": [
            {
                "name": "Первый комментарий",
                "body": "Body первого комментария",
                "date": "2019-05-15T15:56:15.694116Z",
                "id": "0179ef41-fdb6-4700-a4dc-6d7bbc54385a",
                "parent": null,
                "reply": []
            },
            {
                "name": "Второй комментарий",
                "body": "Body второго комментария",
                "date": "2019-05-17T13:59:51.167188Z",
                "id": "1ef06878-58b5-48b0-9349-73986ab66bb4",
                "parent": null,
                "reply": []
            },
            {
                "name": "Третий комментарий",
                "body": "Body третьего комментария",
                "date": "2019-05-19T12:07:15.613266Z",
                "id": "5a01231d-3ee9-4bf6-9a50-462a8277898a",
                "parent": null,
                "reply": [
                    {
                        "name": "Первый вложенный комментарий",
                        "body": "Body первого вложенного комментария",
                        "date": "2019-05-21T22:32:44.998207Z",
                        "id": "514aa634-08bd-4ca3-8a1a-eb10846808ed",
                        "parent": "5a01231d-3ee9-4bf6-9a50-462a8277898a",
                        "reply": [
                            {
                                "name": "Ещё вложенный комментарий",
                                "body": "hello, world",
                                "id": "2957893457984",
                                "reply": [
                                    {
                                        "name": "И ещё",
                                        "body": "@*(^$#^&#^$)",
                                        "id": "b56hethsthsw54w",
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
    render() {
        return (
            <div>
                <Comments items={this.state.comments} />
            </div>
        );
    }
}

export default App;


