/**
 * Created by weimin on 17-1-4.
 */

const calculator = (state={val1:0,val2:0,calWay:"1",res:0},action)=>{
    console.log(action)
    switch (action.type){
        case "INPUT1":
            return {...state,val1:action.val};
        case "INPUT2":
            return {...state,val2:action.val};
        case "METHOD":
            return {...state,calWay:action.val};
        case "CALC":
            let res;
            if (state.calWay=="1") res = Number(state.val1)+Number(state.val2);
            if (state.calWay=="2") res=state.val1-state.val2;
            if (state.calWay=="3") res = state.val1*state.val2;
            if (state.calWay=="4") res = state.val1/state.val2;
            let obj ={...state,res:res};
            return obj;
        default:
            return state;
    }
}

export default calculator;