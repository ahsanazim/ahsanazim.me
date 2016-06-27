
// http://www.tutorialspoint.com/jquery/effect-pulsate.htm
// https://teamtreehouse.com/community/how-to-make-a-button-and-text-appear-after-a-delay
// http://stackoverflow.com/questions/21835012/onclick-function-based-on-element-id
$(document).ready(function() {
  $("#nav_bar").hide().delay(2500).fadeIn();
  $(".main_heading").effect( "pulsate", {times:2}, 2500);
  $("#nav_home").click(function() {
    console.log("#nav_home clicked")
  });
  $("#nav_this_website").click(function() {
    console.log("#nav_this_website clicked")
  });
  $("#nav_contact").click(function() {
    console.log("#nav_contact clicked")
  });
  $("#nav_about").click(function() {
    console.log("#nav_about clicked")
  });
});
