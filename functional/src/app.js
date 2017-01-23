/* 入口启动文件 */
/*
import {createStore} from "redux"
import ReactDOM,{render} from "react-dom"
import React,{Component} from "react"

const counter = (count=0,action)=>{
    switch(action.type){
        case "INC":
            return count+1;
        case "DEC":
            return count-1;
        default:
            return count;
    }
}

const store = createStore(counter);

const onInc = ()=>{
    store.dispatch({type:"INC"});
}

const onDec = ()=>{
    store.dispatch({type:"DEC"});
}

class Counter extends Component{
    render(){
        return (<div>
            <div>计数器:{this.props.val}</div>
            <button onClick={this.props.onInc}>加一</button>
            <button onClick={this.props.onDec}>减一</button>
        </div>)
    }
}

const listener = ()=>{
    render(<Counter val={store.getState()} onInc={onInc} onDec={onDec}/>,document.getElementById("app"))
}
listener()
store.subscribe(listener)*/
import React,{Component} from "react"
import ReactDOM,{render} from "react-dom"
import {Provider} from "react-redux"
import store from "./redux/store.js"
import RootApp from "./containers/RootApp"

render(
    <Provider store={store}>
        <RootApp></RootApp>
    </Provider>,document.getElementById("app"));