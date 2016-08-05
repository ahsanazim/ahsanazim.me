// the following link was used to achieve the effect of the
// navigation bar appear after a delay - in this case, only
// when the main heading has stopped pulsating:
// https://teamtreehouse.com/community/how-to-make-a-button-and-text-appear-after-a-delay

// the following link was used to achieve a smooth scrolling
// effect for when clicking on objects in the navigation bar:
// http://stackoverflow.com/questions/21835012/onclick-function-based-on-element-id


var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}



$(document).ready(function() {
  $("#nav_bar").hide().delay(2500).fadeIn();
  showText("#home", "Ahsan Azim", 0, 500);   
  $("#nav_home").click(function() {
    $('html, body').animate({
      scrollTop: $( "#home_proxy" ).offset().top
    }, 500);
    return false;
  });
  $("#nav_this_website").click(function() {
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
});
// needed the underscore to blink, code taken from following link:
// http://www.computerhope.com/issues/ch001651.htm
function blinker() {
  $('.blinking').fadeOut(650);
  $('.blinking').fadeIn(650);
}
setInterval(blinker, 1350);
