
// http://www.tutorialspoint.com/jquery/effect-pulsate.htm
// https://teamtreehouse.com/community/how-to-make-a-button-and-text-appear-after-a-delay
// http://stackoverflow.com/questions/21835012/onclick-function-based-on-element-id
$(document).ready(function() {
  $("#nav_bar").hide().delay(2500).fadeIn();
  $(".main_heading").effect( "pulsate", {times:2}, 2500);
  $("#nav_home").click(function() {
    $('html, body').animate({
      scrollTop: $( "#footer_div" ).offset().top
    }, 500);
    return false;
  });
  $("#nav_this_website").click(function() {
    $('html, body').animate({
      scrollTop: $( "#this_website" ).offset().top
    }, 500);
    return false;
  });
  $("#nav_contact").click(function() {
    $('html, body').animate({
      scrollTop: $( "#contact" ).offset().top - 50
    }, 500);
    return false;
  });
  $("#nav_about").click(function() {
    $('html, body').animate({
      scrollTop: $( "#about" ).offset().top - 50
    }, 500);
    return false;
  });
  $("#nav_lorem_ipsum").click(function() {
    $('html, body').animate({
      scrollTop: $( "#lorem_ipsum" ).offset().top - 50
    }, 500);
    return false;
  });
});
