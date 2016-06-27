
// http://www.tutorialspoint.com/jquery/effect-pulsate.htm
$(document).ready(function() {
  $(".main_heading").effect( "pulsate", {times:3}, 3000 );
  $('nav_bar').hide().delay(3600).fadeIn(3000);
});
