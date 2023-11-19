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

  //nav fixed
    var _topval = $(window).scrollTop();
    if(_topval >= 150){
        $(".nav").addClass("act");
    }
    else{
        $(".nav").removeClass("act");
    }

    //banner img translate
      var _translatex = "-" + _topval / 4 + "px";
      var _translatey =  _topval / 4 + "px";
      $(".shapes3").css({'transform' : 'translate(' + _translatex +', ' + _translatex + ')'});
      $(".shapes4").css({'transform' : 'translate(' + _translatey +', ' + _translatey + ')'});

});


});




