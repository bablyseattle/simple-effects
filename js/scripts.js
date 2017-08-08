$(document).ready(function() {
    $(".clickable").click(function() {
      $("#initially-showing").toggle();
      $("#initially-hidden").toggle();
    });
    $(".clic1").click(function(){
      $("#bird-hide").hide();

    });
    $(".clic2").click(function(){
      $("#bird-hide").show();

    });

});
