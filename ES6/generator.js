/**
 * Created by weimin on 16-12-20.
 */
/*
var arr =[1,[2,[1,2],3],4,[5,6]];
var flat = function *(a){
    var length = a.length;
    for (var i=0;i<length;i++){
        var item =a[i];
        if (typeof item !="number"){
            yield* flat(item);
        }else{
            yield item;
        }
    }
}

for (let f of flat(arr)){
    console.log(f)
}*/
var arr=[1,2,[3,4,[5,6]]];
var flat = function *(a){
    var length = a.length;
    for (var i=0;i<length;i++){
        var item = a[i];
        if (typeof item=="number"){
            yield item;
        }else{
            yield* flat(item);
        }
    }
}

var gen = flat(arr);

for (let f of gen){
    console.log(f)
}