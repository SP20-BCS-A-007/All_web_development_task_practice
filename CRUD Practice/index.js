$(function(){
    getrequest();
   $("#data").on("click",".btn-danger", handleDelete);
   
})

function getrequest(){
   $.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/posts/1" ,
    success: function (response) {
        $("#data").empty();
        // for (var i =0; i< response.length; i++){
         $("#data").append(`<div class="recipe" data-id="${response[i]._id}"><h3>${response[i].title}</h3><p><button class="btn btn-danger btn-sm float-end">delete</button><button class="btn btn-warning btn-sm float-end">Edit</button> ${response[i].body}</p></div>`
        //  );
      
        }
    }
   });
}



function handleDelete(){
  var btn = $(this);
  var parentdiv= btn.closest(".recipe");
  let id = parentdiv.attr("data-id");
 $.ajax({
   method: "DELETE",
   url: "https://usman-cui-recipies.herokuapp.com/api/recipes/" + id,
    
    success: function (response) {
        getrequest();
    }
 });
}