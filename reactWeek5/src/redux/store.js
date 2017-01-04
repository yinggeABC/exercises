/**
 * Created by weimin on 17-1-4.
 */
import {createStore,applyMiddleware,compose} from "redux";
import counter from "./reducers"
import thunk from "redux-thunk"
import createLogger from "redux-logger"
import DevTools from "../containers/devtools.js"
const enhancer = compose(
    applyMiddleware(thunk,createLogger()),
    DevTools.instrument()
)
 const store = createStore(counter,enhancer);
export default store;