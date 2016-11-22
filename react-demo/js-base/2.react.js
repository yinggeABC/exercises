/**
 * Created by MWei2 on 11/21/2016.
 */
    //render的内容是一个元素
var people = ["Alice","Emily","Kate"];
var ary=[
    <h1>Hello guys</h1>,
    <h2>Welcomed!</h2>
]
ReactDOM.render(
    <div>
    {ary}
    {
    people.map(function(person,index){
        return <div>Hello,{person}</div>
    })}
    </div>,
    document.getElementById("app")
)