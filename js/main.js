//Skew Effect Variables
const section = $(".skewEffect");
let currentPixel = $(window).scrollTop();
const range = 20;

$(document).ready(function(){

  //Arrows
  $(".landingSection_corner .arrowSvg").on( "click", function() {
    goTo(".selectedWorks");
  });

  $(".footer_arrow .arrowSvg").on( "click", function() {
    goTo("body");
  });

  //Transition Out
  $(".link_transition").click(function(e){
    e.preventDefault();
    newLocation = this.href;

    $("body").css("overflow", "hidden");
    $(".main").addClass("fade-out");
    $(".loading").removeClass("loading-out").addClass("loading-show").addClass("loading-in");

    setTimeout(function(){
      $(location).attr('href', newLocation);
    }, 300);

  });

  looper();

});


//Transition In
$(window).on('load', function () {

  $(".loading_text").css("opacity", "0");
  $(".loading").addClass("loading-out");
  $(".main").addClass("fade-in");
  $("body").css("overflow", "visible");

  setTimeout(function(){
    $(".loading").removeClass("loading-show");
  }, 300);
});

//Scroll to Anchor
function goTo(target) {
  $("html, body").animate({
      scrollTop: $(target).offset().top
  }, 1500, "swing");
  return false;
}

//Skew Effect
const looper = function () {
  const newPixel = $(window).scrollTop();
  const diff = newPixel - currentPixel;
  let speed = diff * 0.25;

  if(speed > range){
    speed = range;
  }
  else if (speed < -range) {
    speed = -range;
  }

  if(speed != 0){
    $(".skewEffect img").addClass("shadow");
  }
  else {
    $(".skewEffect img").removeClass("shadow");
  }

  section.css("transform", "skewY(" + speed + "deg)");

  currentPixel = newPixel;

  requestAnimationFrame(looper);
}
