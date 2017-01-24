export const onInc = ()=>{
    return (dispatch,getState)=>{
        setTimeout(()=>{
            dispatch({type:"INC"})
        },2000)
    }
};
export const onDec = function() {
    return {type:"DEC"}
};


export const counter = (count=0,action)=>{
    switch(action.type){
        case "INC":
            return count+1;
        case "DEC":
            return count-1;
        default:
            return count;
    }
}



