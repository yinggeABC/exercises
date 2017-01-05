/**
 * Created by weimin on 17-1-4.
 */

const calculator = ({add1:0,add2:0,purpose:"INPUT",res:0,sel:0},action)=>{
    let state = {add1,add2,purpose,res,sel};
    let sel=0;
    switch (action.type){
        case "INPUT":
          return  Object.assign(state,{purpose:"INPUT"});
        case "SELECT":
          if (state.sel==0)
    }
}

export default calculator;