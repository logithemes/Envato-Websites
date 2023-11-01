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
  

     //FAQ CLICK FUNCTION
     $(".faq-rhs ul li h3").on("click", function () {
        $(".faq-rhs p").slideUp(500);
        $(this).siblings(".faq-rhs p").slideDown(500);
        $(".faq-rhs ul li h3").removeClass("act");
        $(this).addClass("act");
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


    //window scrool top active menu
    $(".anicom").each(function(){
        var _commen = $(this).offset().top - 100;
        if(_topval >= _commen){
            var _get = $(this).attr("id");
            $(".menu ul li a").removeClass("act1");
            $("." + _get + "_nav").addClass("act1")
        }
    });

    
    if(_topval >= 150){
        $(".nav").addClass("act");
    }
    else{
        $(".nav").removeClass("act");
    }

});

   

});



