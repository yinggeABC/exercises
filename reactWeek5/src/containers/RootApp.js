/**
 * Created by weimin on 17-1-4.
 */
import React,{Component} from "react"
import {connect} from "react-redux"
import Counter from "../components/Counter"
const mapStateToProps = (state)=>{
    return {
        value:state
    }
}

function Inc(){
    return (dispatch,getState)=>setTimeout(function(){
        dispatch({type:"Inc"});
    },2000)
}

function Dec(){
    return {type:"Dec"}
}

const mapDispatchToProps=(dispatch)=>{
    return {
        onInc(){
            dispatch(Inc())
        },
        onDec(){
            dispatch(Dec())
        }
    }
}

let RootApp = connect(mapStateToProps,mapDispatchToProps)(Counter);

export default RootApp;