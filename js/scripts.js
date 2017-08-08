$(document).ready(function() {
    $(".clickable").click(function() {
      $("#initially-showing").toggle();
      $("#initially-hidden").toggle();
    });
    $(".clic").click(function(){
      $("#bird-hide").toggle();

      $("#bird-show").toggle();
    });
});
