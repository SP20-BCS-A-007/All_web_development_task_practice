
$(function(){
    $("#todobtn").click(handletodolist);
    $("#todolist li").click(function(){
        $(this).remove();
      })
})

function handletodolist(){
    var newtodo = $("#addtodo").val();
    if($("#addtodo").val()==""){
        alert("Please enter the value");
        return;
    }else{
        $("#addtodo").val("");
        $("#todolist").append(`<li>`+  newtodo + `</li>`);
        $("#todolist li").click(function(){
            $(this).fadeOut();
          })
    }
   
    
}