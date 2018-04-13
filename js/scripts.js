$(function() {
    /** aside block fixed onscroll **/
  $(window).on("scroll", function() {
      if ($(window).scrollTop() >= 200) {
      $('aside').addClass('rightbar-fixed');     
      } else {
          $('aside').removeClass('rightbar-fixed');          
        }
  });  
    
  /** end of script **/
  
  /** side blocks move in and out **/
    var flag = 1;  
  $("header ul li:first-child").on("click", function() {
    if (flag == 1) {      
      $(".sidebar-left").addClass("view-block").css("visibility", "visible").css("width", "100%").css("transition", "all 1s ease-in").css("transform", "scale(1)");
  flag = 0;
  } else {
   $(".sidebar-left").css("width", "0px").css("visibility", "hidden");
     flag = 1;
  }
  });
    var flag2 = 1;
  $("header ul li:nth-child(2)").on("click", function() {
        if (flag2 == 1) {      
      $(".sidebar-right").addClass("view-block").css("visibility", "visible").css("width", "100%").css("transition", "all 1s linear").css("transform", "scale(1)");
  flag2 = 0;
  } else {
   $(".sidebar-right").css("width", "0px").css("visibility", "hidden");
     flag2 = 1;
  }
  });   
  /** End of script **/
  });
  