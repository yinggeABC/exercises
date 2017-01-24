/**
 * Created by MWei2 on 1/23/2017.
 */
import React,{Component} from "react"
import {connect} from "react-redux"
import Counter from "../components/Counter/Counter"
import {onInc,onDec} from "../components/Counter/CounterRedux"

const mapStateToProps = (state)=>{
    return {
        value:state
    }
};



const mapDispatchToProps = (dispatch)=>{
    return {
        onInc:()=>{
            dispatch(onInc())
        },
        onDec:()=>{
            dispatch(onDec())
        }
    }
}
const RootApp = connect(mapStateToProps,mapDispatchToProps)(Counter);

export default RootApp;