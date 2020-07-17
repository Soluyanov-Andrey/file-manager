import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const state = {
    line: [
        { ico:'имя', name: 'переговоры', type:'Пустая папка',adres:"0",id: "1"},
        { ico:'имя', name: 'переговоры', type:'Пустая папка',adres:"0",id: "2"},
        { ico:'имя', name: 'переговоры', type:'Пустая папка',adres:"0",id: "3"},
        { ico:'имя', name: 'переговоры', type:'Пустая папка',adres:"0-2",id: "1"},
        { ico:'имя', name: 'переговоры', type:'Пустая папка',adres:"0-2",id: "2"},
        { ico:'имя', name: 'переговоры', type:'Пустая папка',adres:"0-2",id: "3"},
        { ico:'имя', name: 'переговоры', type:'Пустая папка',adres:"0-2",id: "1"},
        { ico:'имя', name: 'переговоры', type:'Пустая папка',adres:"0-2-3",id: "1"},
        { ico:'имя', name: 'переговоры', type:'Пустая папка',adres:"0-2-3",id: "2"},
        { ico:'имя', name: 'переговоры', type:'Пустая папка',adres:"0-3",id: "1"},
        { ico:'имя', name: 'переговоры', type:'Пустая папка',adres:"0-3",id: "2"}
    ]

}
function pow(masiv, adres) {
    let index;

    for (index = 0; index < masiv.length; ++index) {
        console.log("---",masiv[index].adres);
        // console.log("+++",masiv[index].adres);
         // console.log(masiv[index].adres+'-'+masiv[index].id)
        if(masiv[index].adres == adres){
             console.log("yes"+adres);
            pow(masiv, masiv[index].adres+'-'+masiv[index].id)

        }else{
            // console.log("net"+adres);
        }
        //
    }
    // console.log(masiv);
}
pow(state.line,"0")
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
