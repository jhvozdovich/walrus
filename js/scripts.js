$(document).ready(function() {
  $(".clickable").click(function() {    
    $("#walrus-showing").toggle();
    $("#walrus-hidden .clickable").toggle();
  });
});