const initialState={

        line: [
            { name:'Документ', data: '17.05.2002', type:'Пустая папка',size: 15},
            { name:'Фаил', data: '17.05.2003', type:'Пустая папка',size: 15},
            { name:'текст', data: '17.05.2004', type:'Пустая папка',size: 15}
        ]


}
export default function  rootReducer(state = initialState,action){
    switch (action.type) {

        case 'ADD':
            return {

            }
        case 'SUB':
            return {

            }

    }


    return state
}