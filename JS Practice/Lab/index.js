$(function(){
    handleajax();
}
)

function handleajax(){
   $.ajax({
    method:"GET",
     url: "https://jsonplaceholder.typicode.com/posts",
     success: function(response){
        $("#data").empty();
        for(var i=0; i<response.length; i++){
     
            $("#data").append(`<h1>${response[i].title}</h1> <button>Delete</button>`)
        }
     }
   })
}
