import React from "react";
import "./Ramka.css"
import {connect} from 'react-redux'

const Ramka = ({counter}) => {
    console.log(counter.line[0].name)
    return (
        <div className="Ramka" >
            <h4>{counter.line[0].name}</h4>
        </div>
    );
};
function mapStateToProps(state) {

    return{
        counter: state
    }
}

function mapDispatchToProps(dispatch){

    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ramka)
