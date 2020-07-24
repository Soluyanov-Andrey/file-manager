import React, { Component } from 'react';
import './App.css';
import Table from "./Table/Table";
class App extends Component {


    render() {
        let data = getData();

        function handleData(obj) {

            // возвращаем полученный массив компонентов
            return [...obj.map((i, n) => <Table data={i} key={n} />)];
        }

        let showHTMLData = handleData(data);

        return <div className="dropdown hide">{showHTMLData}</div>;
    }

}

export default App;

function getData() {
    return [
        {
            id: 3,
            parentId: null,
            name: "name3",
            children: [
                {
                    id: 3.1,
                    parentId: 3,
                    name: "name3.1"
                }
            ]
        },

        {
            id: 2,
            parentId: null,
            name: "name2"
        },

        {
            id: 1,
            parentId: null,
            name: "name1",
            children: [
                {
                    id: 1.1,
                    parentId: 1,
                    name: "name1.1"
                }
            ]
        }
    ];
}
