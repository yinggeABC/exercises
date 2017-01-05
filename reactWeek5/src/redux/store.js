/**
 * Created by weimin on 17-1-4.
 */
import {createStore} from "redux"
import {calculator} from "./reducers"


const store = createStore(calculator);
export default store;
