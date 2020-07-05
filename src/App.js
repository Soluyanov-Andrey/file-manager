import React, { Component } from 'react';
import './App.css';
import Table from "./Table/Table";
class App extends Component {
    state = {
        line: [
            { name:'Документ', data: '17.05.2002', type:'Пустая папка',size: 15},
            { name:'Фаил', data: '17.05.2003', type:'Пустая папка',size: 15},
            { name:'текст', data: '17.05.2004', type:'Пустая папка',size: 15}
        ]
        // pageTitle: 'React components'
    }

  render() {

    return (
        <Table props={this.state}/>
    );
  }
}

export default App;
