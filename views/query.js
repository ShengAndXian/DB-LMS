$(document).ready(function(){
    $("button").click(function(){
        $.post("/query/qu" , $("form").serialize() , function(data){
            $("#data").html(data);
        });
    });
});