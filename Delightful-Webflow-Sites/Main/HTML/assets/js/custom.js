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

    //MOUSE MOVE FUNCTION
     //mouse move rotate
     $("#mousemove").mousemove(function(e) {
        $("#mousemove").css('transform', 'rotateX(0deg) rotateY(0deg) perspective(0px)');
        
        var rotate_X;
        var rotate_Y;
        var perspective_z;
        var invert = false;
        
        if (invert) {
          rotate_X =  e.pageX / 80;
          rotate_Y = e.pageY / 80;
          perspective_z = e.pageX / 80;
        } else if (!invert) {
          rotate_X = e.pageX / 80;
          rotate_Y = -e.pageY / 80;
          perspective_z = e.pageX / 80;

        }
        
        $("#mousemove").css('transform', 'rotateX(' + rotate_X + 'deg) rotateY(' + rotate_Y + 'deg) perspective(' + perspective_z + 'px)')
      });
    
    //BANNER ANIMATION
    $(".banner").addClass("ani-banner");
  
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




