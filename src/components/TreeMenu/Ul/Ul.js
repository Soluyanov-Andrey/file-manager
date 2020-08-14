import React, {Component} from 'react';

const Ul = ({items, ext, visible}) => {

    //определяет отображать идущее далее блоки или нет
    const visible_blok = (s) => {
        if (visible[s] != undefined && visible[s] == true) {
            return true;
        } else {
            return false;
        }
    }
    //определяем какое изображение отображать
    const image = (perent, adress) => {
        var img_arrow_side = "image/TreeMenu/arrow_side.png"
        var img_open_side = "image/TreeMenu/arrow_open.png"

        if (visible[adress] == false && perent) {
            var img = img_arrow_side
        } else {
            var img = img_open_side
        }

        if (perent) {
            return img
        } else {
            return null
        }
    }

    return (
        <React.Fragment>
            <ul className="tree_menu_ul">
                {items.map(n => (
                    <li key={n.adress} id={n.adress}>
                        <div className="tree_menu_li_blok">
                            <img onClick={() => (ext(n.adress))} className="tree_menu_li_side" src={image(n.presence_сhild, n.adress)}/>
                            <img className="tree_menu_li_folder" height="20px" width="15px" src="image/TreeMenu/folder.png"/>{n.name}
                        </div>
                        {n.сhild && n.сhild.length && visible_blok(n.adress) ? <Ul items={n.сhild} ext={ext} visible={visible}/> : null}

                    </li>
                ))}
            </ul>
        </React.Fragment>

    )
};

export default Ul;



