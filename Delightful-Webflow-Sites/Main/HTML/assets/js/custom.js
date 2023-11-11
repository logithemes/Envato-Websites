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
    $(".banner").addClass("ani-banner");
  
    //SIDE BAR ACT
    $(".sidebat-act").on("click", function(){
        $(".side-bar").addClass("act");
    })

      //SIDE BAR REMOVE
      $(".side-bar-im i").on("click", function(){
        $(".side-bar").removeClass("act");
    })


    //mouse move image
   
    //mouse move img  end

      	//mouse leave image
	$(".container-box").mouseleave(function() {
			$(".mousemove").css("opacity", "0");
		});

    //mouse move rotate
    $(".case-study-inner img").mousemove(function(e) {
      $('.case-study-inner img').css('transform', 'rotateX(0deg) rotateY(0deg) perspective(0px)');
      
      var rotate_X;
      var rotate_Y;
      var perspective_z;
      var invert = false;
      
      if (invert) {
        rotate_X =  e.pageX / 50;
        rotate_Y = e.pageY / 50;
        perspective_z = e.pageX / 20;
      } else if (!invert) {
        rotate_X = e.pageX / 50;
        rotate_Y = -e.pageY / 50;
        perspective_z = e.pageX / 20;

      }
      
      $('.case-study-inner img').css('transform', 'rotateX(' + rotate_X + 'deg) rotateY(' + rotate_Y + 'deg) perspective(' + perspective_z + 'px)')
    });

    $(".case-study-inner img").mouseleave(function(){
      $(".case-study-inner img").css("transform", "none")
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




