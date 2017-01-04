/**
 * Created by weimin on 17-1-4.
 */
const middleWare = (store)=>next=>action=>{
    console.log(action.type)
}

export default middleWare;

