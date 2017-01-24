/**
 * Created by MWei2 on 1/23/2017.
 */
 import {createStore,applyMiddleware,compose} from "redux"
 import {counter} from "../components/Counter/CounterRedux"
 import thunk from "redux-thunk"
 import createLogger from "redux-logger"
import DevTools from "../containers/DevTools"
const enhancer = compose(
    applyMiddleware(thunk,createLogger()),DevTools.instrument
);

let store = createStore(counter,enhancer);

export default store;