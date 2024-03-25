$(document).ready(function() {


  
    //award mouse over

    $(".award-showcase-list li").mouseover(function(){
        $(".award-showcase-list li").removeClass("act");
        $(this).addClass("act");
        var _tab = $(this).attr("id");
        $(".award-img-inner").hide();
        $("#" + _tab + "_view").show();
        $("#" + _tab + "_view").css("transform", "scale(1)");
    });
     

    // $(".award-showcase-list li").mouseover(function () {
    //     $(".award-showcase-list li").removeClass("act");
    //     $(this).addClass("act");
    //     var _tab = $(this).attr("id");
    //     $(".fav-pack").hide();
    //     $("#" + _tab + "_view").show();
    // });

    

      //PRICING PLAN ADD & REMOVE BACKGROUND COLOR
      $(".pricing-plan-inner").mouseover(function () {
        $(".pricing-plan-inner").removeClass("act");
        $(this).addClass("act");
    })

	
    //SIDE BAR ACT
$(".sidebat-act").on("click", function() {
        $(".side-bar").addClass("act");
    })
    //SIDE BAR REMOVE
$(".side-bar-im i").on("click", function() {
        $(".side-bar").removeClass("act");
    })
    //RESPONSIVE MENU BUTTON
$(".menu-bar i").on("click", function() {
    $(".menu").addClass("menuact");
});
//RESPONSIVE MENU BUTTON REMOVE
$(".menu span").on("click", function() {
        $(".menu").removeClass("menuact");
    })
    //scrool top
$(window).on("scroll", function() {
        var _top = $(window).scrollTop();
        if(_top >= 100) {
            $(".nav").addClass("act")
        } else {
            $(".nav").removeClass("act");
        }
    })
    //banner addclass
$(".banner-content").addClass("a1");

});