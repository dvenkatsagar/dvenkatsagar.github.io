function hideAddressBar()
{
  if(!window.location.hash)
  {
      if(document.height < window.outerHeight)
      {
          document.body.style.height = (window.outerHeight + 50) + 'px';
      }

      setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
  }
}

$(document).ready(function(){
  window.addEventListener("load", function(){ if(!window.pageYOffset){ hideAddressBar(); } } );
  window.addEventListener("orientationchange", hideAddressBar );
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
