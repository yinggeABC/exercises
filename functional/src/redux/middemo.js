/**
 * Created by MWei2 on 1/23/2017.
 */

const middlewareDemo = ({getState,dispatch})=>next=>action=>{
  console.log(action)
}

export default middlewareDemo;