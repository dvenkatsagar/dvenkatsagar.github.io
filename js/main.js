$(document).ready(function(){

  $('#home .carousel').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    appendDots : $("#carousel-dots"),
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
  });

  $('#side-menu li ').off("click").on("click",function(event){
    window.location = window.location.protocol + "//" + window.location.host + $(event.target).find("a").attr("href");
  });

});
