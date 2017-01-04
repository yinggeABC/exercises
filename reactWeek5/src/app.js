/* 入口启动文件 */
import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
import {Provider} from "react-redux";
import store from "./redux/store"
import RootApp from "./containers/RootApp"
import DevTools from "./containers/devtools"

let node;
if (__DEV__){
    node =(
        <div>
            <DevTools/>,
            <RootApp/>
        </div>
    )
}
if (__PROD__){
    console.log("prod")
    node = <RootApp/>
}
render(<Provider store={store}>
    {node}
</Provider>
    ,document.getElementById("app"))

/*import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
import {Provider,connect} from "react-redux";
import {createStore} from "redux";

const counter = (count=0,action)=>{
    switch (action.type){
        case "Inc":
            return count+1;
        case "Dec":
            return count-1;
        default:
            return count;

    }
}

const store = createStore(counter);


class Counter extends Component{
    render(){
        return (
            <div>
                <h1>Click {this.props.count} times</h1>
                <button onClick={this.props.Inc}>Add one</button>
                <button onClick={this.props.Dec}>Minus one</button>
            </div>
        )
    }
}


const RootApp = connect((state)=>{
    return {
        count:state
    }
},(dispatcher)=>{
  return {
      Inc(){
          dispatcher({type: "Inc"})
      },
      Dec(){
          dispatcher({type: "Dec"})
      }
  }

})(Counter);

render(<Provider store={store}>
    <RootApp></RootApp>
</Provider>
    ,document.getElementById("app"))*/
