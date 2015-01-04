var loca = "home";
$(document).ready(function(){
  /*This hides all other pages and shows home when started */
  $('.body').hide("fast");
  $(".body#" + loca).show("fast");
  /* To set header hover theme stuff */
  $(".header > #logo").hover(
    function(){
      $(this).fadeTo("fast", 1);
    }, 
    function(){
      $(this).fadeTo("fast", 0.5);
    });
  $(".header > .navbar li div").hover(
    function(){
      $(this).fadeTo("fast", 1);
    }, 
    function(){
      $(this).fadeTo("fast", 0.5);
    });
  /* To show and hide the different pages... */
  $('.navbar .menuitm').click(function(){
    var x = this.id;
    $(".body#" + loca).hide("slow", function(){
      $(".navbar #" + loca).css("text-decoration", "none");
      loca = x;
      $(".body#" + x).show("slow");
      $(".navbar #" + x).css("text-decoration", "underline");
    });
  });
  /* To make the logo be a link home... */
  $('.header #logo').click(function(){
    var x = "home";
    $(".body#" + loca).hide("slow", function(){
      $(".navbar #" + loca).css("text-decoration", "none");
      loca = x;
      $(".body#" + x).show("slow");
      $(".navbar #" + x).css("text-decoration", "underline");
    });
  });
});