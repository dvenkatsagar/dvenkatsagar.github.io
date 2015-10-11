$(document).ready(function(){

  $('#home .carousel, #about-me .carousel').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    accessibility: true,
    adaptiveHeight: true
  });

  $('#side-menu li ').off("click").on("click",function(event){
    window.location = window.location.protocol + "//" + window.location.host + $(event.target).find("a").attr("href");
  });

  $("#search-input").val("");
  $("#search-input").off("input").on("input",function(){
    if($(this).val().length != 0 ){
      $("#results-list").show();
      $("#archive-list").hide();
    }else if ($(this).val().length == 0) {
      $("#results-list").hide();
      $("#archive-list").show();
    }
  });
});
