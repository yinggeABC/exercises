/**
 * Created by weimin on 16-11-22.
 */
var cont = (obj)=>{
    Object.freeze(obj);
    Object.keys(obj).forEach((item,index)=>{
         if (typeof obj[item]=="object") cont(obj[item]);
    })
}

let obj={
    name:{
        first:"Wei",
        last:"Min"
    },
    age:26
}
cont(obj)
obj.name.first="zhang";
console.log(obj)
