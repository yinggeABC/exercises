/**
 * Created by weimin on 17-1-4.
 */
const loggerMiddleWare = store=>next=>action=>{
    const dispatcher = store.dispatcher;
    const getState = store.getState;
    console.group(action.type)
    console.log("previous state",getState())
     let res = next(action)
    console.log("next state",getState())
    console.groupEnd(action.type)
}

export default loggerMiddleWare;