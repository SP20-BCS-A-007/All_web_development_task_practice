///<reference path="../typings/globals/jquery/index.d.ts" />


$(function(){
    $("#handleajax").click(function(){
        $.get("hello.txt", function(response){
            
            $("#data").append(response)
        })
    })
    handleajax();
})

function handleajax(){
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes/",
        method: "Get",
        success: function(response){
             for(var i=0; i<response.length; i++){
                var res = response[i];
                $("#data").append("<h1>"+res._id+"</h1>")
                $("#data").append("<h1>"+res.title+"</h1>")
                $("#data").addClass("red")
                $("#data h1").click(function(){
                $(this).fadeOut();
                })
             }
        }
    })
}