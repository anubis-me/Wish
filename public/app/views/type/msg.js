$(function() {
  $(".envelope").fadeIn();

  $(".btn").on("click", function() {
    $(".envelope").removeClass("open");
    setTimeout(function() {
      $(".envelope").addClass("open");
    }, 500);
    return false;
  });
});
