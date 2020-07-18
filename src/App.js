import React, { Component } from 'react';
import './App.css';
import Table from "./Table/Table";
class App extends Component {
    state = {
        line: [
            { ico:'имя1', name: 'переговоры', type:'Пустая папка',adres_predka:"0",adres_svoi: "0-1"},
            { ico:'имя2', name: 'переговоры', type:'Пустая папка',adres_predka:"0",adres_svoi: "0-2"},
            { ico:'имя3', name: 'переговоры', type:'Пустая папка',adres_predka:"0",adres_svoi: "0-3"},
            { ico:'имя4', name: 'переговоры', type:'Пустая папка',adres_predka:"0-2",adres_svoi: "0-2-1"},
            { ico:'имя5', name: 'переговоры', type:'Пустая папка',adres_predka:"0-2",adres_svoi: "0-2-2"},
            { ico:'имя6', name: 'переговоры', type:'Пустая папка',adres_predka:"0-2",adres_svoi: "0-2-3"},
            { ico:'имя7', name: 'переговоры', type:'Пустая папка',adres_predka:"0-2",adres_svoi: "0-2-4"},
            { ico:'имя8', name: 'переговоры', type:'Пустая папка',adres_predka:"0-2-3",adres_svoi: "0-2-3-1"},
            { ico:'имя9', name: 'переговоры', type:'Пустая папка',adres_predka:"0-2-3",adres_svoi: "0-2-3-2"},
            { ico:'имя10', name: 'переговоры', type:'Пустая папка',adres_predka:"0-3",adres_svoi: "0-3-1"},
            { ico:'имя11', name: 'переговоры', type:'Пустая папка',adres_predka:"0-3",adres_svoi: "0-3-1"},
            { ico:'имя12', name: 'переговоры', type:'Пустая папка',adres_predka:"0",adres_svoi: "0-4"},
            { ico:'имя11', name: 'переговоры', type:'Пустая папка',adres_predka:"0-2-1",adres_svoi: "0-2-1-1"},
            { ico:'имя12', name: 'переговоры', type:'Пустая папка',adres_predka:"0-2-1",adres_svoi: "0-2-1-2"}
        ]

    }

  render() {
      function pow(masiv) {
          let children = [];
          let index;
          for (index = 0; index < masiv; ++index) {
              children.push(<Table/>)
          }
          return children
      }
      let showHTMLData = pow(5);

    return (
        <div>{showHTMLData}</div>
    );
  }
}

export default App;
