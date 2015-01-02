var loca = "home";
$(document).ready(function(){
  /*This hides all other pages and shows home when started */
  $('.body').hide("fast");
  $(".body#" + loca).show("fast");
  /* To set header hover theme stuff */
  $('.header > #logo').mouseenter(function(){
    $(this).fadeTo('fast', 1);
  });
  $('.header > #logo').mouseleave(function(){
    $(this).fadeTo('fast', 0.5);
  });
  $('.header > .navbar li div').mouseenter(function(){
    $(this).fadeTo('fast', 1);
  });
  $('.header > .navbar li div').mouseleave(function(){
    $(this).fadeTo('fast', 0.5);
  });
  /* To show and hide the different pages... */
  $('.navbar li div').click(function(){
    var x = this.id;
    $(".body#" + loca).hide("slow", function(){
      loca = x;
      $(".body#" + x).show("slow");
    });
  });
  /* To show and hide the different pages... */
  $('.header #logo').click(function(){
    var x = "home";
    $(".body#" + loca).fadeTo("slow", 0, function(){
      $(".body#" + loca).hide("fast", function(){
        loca = x;
        $(".body#" + x).fadeTo("slow", 1);
      })
    });
  });
});