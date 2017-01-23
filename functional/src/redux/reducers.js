/**
 * Created by MWei2 on 1/23/2017.
 */
const counter = (count=0,action)=>{
    switch(action.type){
        case "INC":
            return count+1;
        case "DEC":
            return count-1;
        default:
            return count;
    }
}

export default counter;