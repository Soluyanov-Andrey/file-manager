import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const state = {
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
function pow(masiv, adres,level) {
    let index;
    let str=" ";
    for (index = 0; index < masiv.length; ++index) {
        // console.log("---",masiv[index].adres_predka);
        // console.log("+++",masiv[index].adres);
         // console.log(masiv[index].adres+'-'+masiv[index].id)
        if(masiv[index].adres_predka == adres){
            //str.repeat коипирует строку str заданное количество раз
            console.log(str.repeat(level)+masiv[index].ico);
            pow(masiv, masiv[index].adres_svoi,level+5)

        }

        //
    }
    // console.log(masiv);
}
pow(state.line,"0",0)
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
