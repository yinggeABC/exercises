/**
 * Created by MWei2 on 1/23/2017.
 */
 import {createStore,applyMiddleware} from "redux"
 import counter from "./reducers"
 import createLogger from "redux-logger"
 import middlewareDemo from "./middemo"
 const mid = createLogger();
const finalCreateStore = applyMiddleware(middlewareDemo)(createStore);
let store = finalCreateStore(counter);

export default store;