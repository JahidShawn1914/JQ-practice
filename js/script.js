// JQ start
$(document).ready(function(){

    // $('button').on("click",function(){
    //     alert("Welcome");
    // })

    $("#btn1").on("click",function(){
        $("h1").fadeToggle(1000);
    })


    $('#container').css("border", "2px solid red")
    .add("h1").css("background","salmon");


    $(".p").addClass("highlight");


    $('#right').on("click",function(){
        $('.block').animate({"left": "+=50px"},"fast");
    });
    $('#left').on("click",function(){
        $('.block').animate({"left": "-=50px"},"fast");
    });


    $("#go").on("click",function(){
        $("#block").animate({
            with: "100%",
            opacity: 0.4,
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        },1500);
    });

    $("input")
    .on("keyup",function(){
        var value = $(this).val();
        $("#p2").text(value);
    }).trigger("keyup");

    $(".ch2").on("click",function(){
        $(this).hide();
    })
})
// JQ end