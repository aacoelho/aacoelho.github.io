$(document).ready(function(){

  $(".landingSection_corner .arrowSvg").on( "click", function() {
    goTo(".selectedWorks");
  });

  $(".footer_arrow .arrowSvg").on( "click", function() {
    goTo("body");
  });

  $(".link_transition").click(function(e){
    $("body").css("overflow", "hidden");

    e.preventDefault();
    newLocation = this.href;

    $(".main").addClass("fade-out");
    $(".loading").removeClass("loading-out");
    $(".loading").addClass("loading-show");
    $(".loading").addClass("loading-in");
    setTimeout(newpage, 300);

  });

});

function goTo(target) {
  $("html, body").animate({
      scrollTop: $(target).offset().top
  }, 1500, "swing");
  return false;
}

$(window).on('load', function () {
  $(".loading_text").css("opacity", "0");
  $(".main").addClass("fade-in");
  $(".loading").addClass("loading-out");
  $("body").css("overflow", "visible");
  setTimeout(hideTransition, 300);
  //$(".loading").removeClass("loading-show");
});

function hideTransition(){
  $(".loading").removeClass("loading-show");
}

function newpage() {
  window.location = newLocation;
}
