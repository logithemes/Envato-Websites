$(document).ready(function () {
    "use strict";
    //RESPONSIVE MENU BUTTON
    $(".menu-bar i").on("click", function () {
        $(".menu").addClass("menuact");
    });
    //RESPONSIVE MENU BUTTON REMOVE
    $(".menu span").on("click", function(){
        $(".menu").removeClass("menuact");
    })

  
    //SIDE BAR ACT
    $(".sidebat-act").on("click", function(){
        $(".side-bar").addClass("act");
    })

      //SIDE BAR REMOVE
      $(".side-bar-im i").on("click", function(){
        $(".side-bar").removeClass("act");
    })



//ON WINDOW SCROOL FUNCTION

$(window).on("scroll", function(){
    var _topval = $(window).scrollTop();
    if(_topval >= 150){
        $(".nav").addClass("act");
    }
    else{
        $(".nav").removeClass("act");
    }

});


});

  
/*var moveDiv = document.getElementById('movediv');

window.onmousemove = function (e) {
    var x = e.pageX,
        y = e.pageY;
    moveDiv.style.top = (y + 20) + 'px';
    moveDiv.style.left = (x + 20) + 'px';
};
*/
$("function").mousemove(function(){

})  

var moveDiv = document.getElementById('movediv');

$(".landing-banner").mousemove(function(e){
    var x = e.pageX,
        y = e.pageY;
    moveDiv.style.top = (y + 20) + 'px';
    moveDiv.style.left = (x + 20) + 'px';
}) ;

$(".landing-banner").mouseleave(function(){
    $("movediv").css("opacity", "0")
})






