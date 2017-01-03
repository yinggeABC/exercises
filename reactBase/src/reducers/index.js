/**
 * Created by MWei2 on 1/1/2017.
 */
export default (state=0,action)=>{
    switch(action.type){
        case "INC":
            return state+1;
        case "DEC":
            return state-1;
        default:
            return state;
    }
}