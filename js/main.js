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

  //Transition Out - Loading
  $(".link_transition").click(function(e){
    e.preventDefault();
    newLocation = this.href;

    $("body").addClass("noScroll");
    $(".main").addClass("fade-out");
    $(".loading_text").css("opacity", "0");
    $(".loading").removeClass("loading-hidden").removeClass("loading-out").addClass("loading-in");
    // $("body").css("overflow", "hidden");
    // $(".loading").removeClass("loading-out").removeClass("loading-hidden").addClass("loading-in");

    setTimeout(function(){
      $(location).attr('href', newLocation);
    }, 300);

  });

  //Orientation Title
  orientationScreen();

  $(window).resize(function(){
    orientationScreen();
  });

  $(window).on('orientationchange', function(event) {
    orientationScreen();
  });

  looper();

});


//Transition In - Loading
$(window).on('load', function () {

  $(".loading_text").css("opacity", "0");
  $(".loading").addClass("loading-out");
  $("body").removeClass("noScroll");
  $(".main").addClass("fade-in");

  setTimeout(function(){
    $(".loading").addClass("loading-hidden");
  }, 300);
});

//Orientation Mobile Screen
function orientationScreen(){
  if(window.innerHeight < window.innerWidth){
    $("body").addClass("landscape");
  }
  else {
    $("body").removeClass("landscape");
  }
}

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

  if($(window).width()<1024){
    speed = 0;
  }
  section.css("transform", "skewY(" + speed + "deg)");

  currentPixel = newPixel;

  requestAnimationFrame(looper);
}
