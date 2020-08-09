import React, { Component } from 'react';
import Li from "./Li/Li";
import TreeMenu from "../TreeMenu";
//
// const onLabelClick = (b) => {
//     console.log(b)
// };
// const onLabelClick1 = (b) => {
//     console.log("--",b)
// };
// const Ul = ({ items }) => (
//
//     <React.Fragment>
//         <ul className="tree_menu_ul">
//             {items.map(n => (
//                 <li key = {n.adress} id = {n.adress} >
//                     <div className="tree_menu_li_blok" onClick={()=>(onLabelClick1(n.adress))} >
//                         <img onClick={()=>(onLabelClick(n.adress))} className="tree_menu_li_side" src = {n.presence_сhild  ? "image/TreeMenu/arrow_side.png" : null}/>
//                         <img className="tree_menu_li_folder" height="20px" width="15px" src="image/TreeMenu/folder.png"/>
//                         {n.name}
//                     </div>
//                     {n.сhild && n.сhild.length ? <Ul items={n.сhild} /> : null}
//
//                 </li>
//             ))}
//         </ul>
//     </React.Fragment>
//
// );
//
// export default Ul;

// const Ul = ({ props }) => (
//     <div>{console.log(props)}</div>
//
// );
// export default Ul;



class Ul extends Component {
    //так можно передать пропс в класс почемуто нужно передовать именно props!! иные значения не подходят
    constructor(props) {
        super(props);

        // this.Ul1(items);
    }

    // Ul1 = ({ items }) => (
    //
    // )
//вот такая функция с круглыми скобками равносильна что сразу возвращает
    Ul2= () => (
        <div>jjjj</div>
    )

// такая эквеволента верхней
    Ul1= () => {

        return(
            <React.Fragment>
                <ul className="tree_menu_ul">

                </ul>
            </React.Fragment>

        )

    };

    render() {

        return(

            {this.Ul1()}

        )
    }
};

export default Ul;


