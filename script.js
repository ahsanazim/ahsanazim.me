
// the following link was used to achieve the pulsating
// effect of the main heading (i.e. "Ahsan Azim"):
// http://www.tutorialspoint.com/jquery/effect-pulsate.htm

// the following link was used to achieve the effect of the
// navigation bar appear after a delay - in this case, only
// when the main heading has stopped pulsating:
// https://teamtreehouse.com/community/how-to-make-a-button-and-text-appear-after-a-delay

// the following link was used to achieve a smooth scrolling
// effect for when clicking on objects in the navigation bar:
// http://stackoverflow.com/questions/21835012/onclick-function-based-on-element-id

$(document).ready(function() {
  $("#nav_bar").hide().delay(2500).fadeIn();
  $(".main_heading").effect( "pulsate", {times:2}, 2500);
  $("#nav_home").click(function() {
    console.log("activated as well");
    $('html, body').animate({
      scrollTop: $( "#home_proxy" ).offset().top
    }, 500);
    return false;
  });
  $("#nav_this_website").click(function() {
    console.log("activated");
    $('html, body').animate({
      scrollTop: $( "#this_website_proxy" ).offset().top - 50
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
