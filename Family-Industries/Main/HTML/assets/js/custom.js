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

    

    //BANNER ANIMATION
    $(".banner .ban-lhs").addClass("ani1");
    $(".video-banner").addClass("ani2");
  
  
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

    var _topmi = "-" + _topval/2+"px";
    var _toppl = _topval/20 + "px";
    $(".client-logo-left").css({'transform' : 'translateX(' + _toppl +')'});
    $(".client-logo-wrap1 .client-logo").css({'transform' : 'translateX(' + _topmi +')'});

    



    if(_topval >= 150){
        $(".nav").addClass("act");
    }
    else{
        $(".nav").removeClass("act");
    }

});
  

});






