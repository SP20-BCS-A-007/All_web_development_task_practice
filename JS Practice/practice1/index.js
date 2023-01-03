///<reference path="../typings/globals/jquery/index.d.ts" />
function submit(){
   
    console.log($(".emailcheck").val())
    if($(".emailcheck").val()==""){
    
        $(".emailcheck").addClass('red')
    }
   
}