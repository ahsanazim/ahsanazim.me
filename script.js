
// http://www.tutorialspoint.com/jquery/effect-pulsate.htm
$(document).ready(function() {
  $("#nav_bar").hide().delay(3000).fadeIn();
  $(".main_heading").effect( "pulsate", {times:3}, 3000 );
});
