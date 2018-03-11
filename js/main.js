$(document).ready(function(){

  $(".landingSection_corner .arrowSvg").on( "click", function() {
    goTo(".selectedWorks");
  });

  $(".footer_arrow .arrowSvg").on( "click", function() {
    goTo("body");
  });

});

function goTo(target) {
  $("html, body").animate({
      scrollTop: $(target).offset().top
  }, 1500, "swing");
  return false;
}
