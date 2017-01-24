/**
 * Created by weimin on 17-1-23.
 */
const loggerMiddleware = store=>next=>action=>{
    const {getState,dispatch} = store;
    console.group(action.type)
    console.log("dispatching",action);
    console.log("previous state",getState())
    let res = next(action);
    
    console.log("next state",getState())
    console.groupEnd(action.type);
    return res;
}