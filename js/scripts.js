$(document).ready(function() {
  $(".clickable").click(function() {    
    $("#walrus-showing").toggle();
    $("#walrus-hidden p").toggle();
  });
  
   $(".fading-text").click(function() {
    $("#fade-out-text").fadeOut();
    $("#fade-out-text").fadeIn();
  });
  
  $(".babyemu").click(function() {
    $(".initially-hidden").slideToggle();
    $(".initially-showing").slideToggle();
  });
});