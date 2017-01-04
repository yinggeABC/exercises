/**
 * Created by weimin on 17-1-1.
 */
import {applyMiddleware,createStore} from "redux";
import createLogger from "redux-logger";
const logger = createLogger();

const reducer = ()=>{

}
const store = createStore(reducer,applyMiddleware(logger))
store.dispatch({
    type:"add"
})

store.subscribe(function(){
    console.log("listener")
})

