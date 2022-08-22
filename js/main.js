"use strict"
// Jquery
$(document).ready(function(){
  // nav#gnb
  $(".gnb__main").hover(function(){
    $(".gnb__sub").slideDown(200);
  },function(){
    $(".gnb__sub").slideUp(200);
  });

  // slide
  function slidemove(){
    let smv=$(".slide__box > div").height();
    $(".slide__box").animate({
      top:-smv      
    },function(){
      $(".slide__box > div:first").appendTo(".slide__box");
      $(".slide__box").css('top', 0);
    });    
  }
  setInterval(slidemove, 3000);

  // tab
  $(".notgall__con > div").hide()
  $(".notgall__con > div:first").show()
  $(".notgall__title a").click(function(){
    let num=$(this).index();
    $(".notgall__title a").removeClass('active');
    $(this).addClass('active');
    $(".notgall__con > div").hide()
    $(".notgall__con > div").eq(num).show()
  });

  // pop
  $("#notice ul li:first").click(function(){
    $("#pop").show();
  });
  $("#pop #popclose").click(function(){
    $("#pop").hide();
  });


});