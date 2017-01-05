/**
 * Created by weimin on 17-1-4.
 */
import React,{Component} from "react"
import {connect} from "react-redux"
import Calculator from "../components/Calculator"
let mapStateToProps = (state)=>{
    return {res:state.res};
}

let mapDispatchToProps=(dispatch)=>{
    return {
        onInput1:(e)=>{
          return  dispatch({type:"INPUT1",val:e.target.value})
        },
        onInput2:(e)=>{
          return  dispatch( {type:"INPUT2",val:e.target.value})
        },
        onSelect:(e)=>{
          return  dispatch({type:"METHOD",val:e.target.value})
        },
        onCalc:()=>{
          return dispatch({type:"CALC"})
        }
    }
}
const RootApp = connect(mapStateToProps,mapDispatchToProps)(Calculator);

export default RootApp;