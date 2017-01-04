/**
 * Created by weimin on 17-1-4.
 */

const counter =(count=0,action)=>{

    switch (action.type){
        case "Inc":
            return count+1;
        case "Dec":
            return count-1;
        default:
            return count;
    }
}

export default counter;