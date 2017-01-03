/**
 * Created by MWei2 on 1/1/2017.
 */
import React from "react"
import ReactDOM from "react-dom"
import {createStore} from "redux"
import Counter from "./components/Counter"
import counter from "./reducers"

const store = createStore(counter);
const render = ()=>ReactDOM.render(
    <Counter value ={store.getState()} onIncrement={()=>store.dispatch({type:"INC"})}
    onDecrement ={()=>store.dispath({type:"DEC"})}
/>,
   document.getElementById("app")
);

render();
store.subscribe(render);