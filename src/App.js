import React, { Component } from 'react';
import {connect} from 'react-redux'

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
      console.log(this.props)
    return (
        <Table props={this.state}/>
    );
  }
}

function mapStateToProps(state) {

    return{
        counter: state
    }
}

function mapDispatchToProps(dispatch){

    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
