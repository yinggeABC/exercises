/**
 * Created by MWei2 on 9/12/2016.
 */
$(function(){
    var addBtn = $(".add");
    var name = $("#name").val("");//开始的时候清空输入框
    var age = $("#age").val("");
    addBtn.on("click",function(){
        name = $("#name").val();
        age = $("#age").val();
        var data = {"name":name,"age":age}
        $.ajax({
            type:"POST",
            crossDomain:true,
            url:"http://localhost:8080/addUser",
            data:data,
            success:function(msg){
                console.log("hello")
            }
        })
    })
})