$(document).ready(function(){

  $('#home .carousel').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    accessibility: true,
    adaptiveHeight: true
  });

  $('#side-menu li ').off("click").on("click",function(event){
    window.location = window.location.protocol + "//" + window.location.host + $(event.target).find("a").attr("href");
  });

});
