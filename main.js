(function($){
  var animations = ["bounce","flash","pulse","rubberBand","shake","swing","tada","wobble","jello",
  "bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp",
  "bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp",
  "fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig",
  "fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig",
  "flipInX","flipInY",
  "flipOutX","flipOutY",
  "lightSpeedIn","lightSpeedOut",
  "rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight",
  "rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight",
  "hinge",
  "rollIn","rollOut",
  "zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp",
  "zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp",
  "slideInDown","slideInLeft","slideInRight","slideInUp",
  "slideOutDown","slideOutLeft","slideOutRight","slideOutUp"];

  var vendor_animation_duration = function(i){
    var s = {
      "-webkit-animation-duration" : i,
      "-moz-animation-duration" : i,
      "-o-animation-duration" : i,
      "animation-duration" : i
    };
    return s
  }
  var vendor_animation_delay = function(i){
    var s = {
      "-webkit-animation-delay" : i,
      "-moz-animation-delay" : i,
      "-o-animation-delay" : i,
      "animation-delay" : i
    };
    return s;
  }

  var vendor_animation_iteration_count = function(i){
    var s = {
      "-webkit-animation-iteration-count" : i,
      "-moz-animation-iteration-count" : i,
      "-o-animation-iteration-count" : i,
      "animation-iteration-count" : i
    };
    return s;
  }

  function merge_props(obj){
    var obj3 = {};
    for (var o in obj) {
      for (var attrname in obj[o]) { obj3[attrname] = obj[o][attrname]; }
    }
    return obj3;
  }

  $(document).ready(function(){
    // Full list of configuration options available at:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
      controls: false,
      progress: false,
      history: true,
      center: true,
      overview:false,
      keyboard : true,
      parallaxBackgroundImage: 'lib/media/parallax-dark-0.jpg',

      // presentation size
      width: 1280,
      height: 720,
      minScale : 0.5,
      maxScale : 1.2,
      transition: 'slide', // none/fade/slide/convex/concave/zoom

      // menu options
      menu: {
        themes: [
          { name: 'Black', theme: 'css/theme/black.css' },
          { name: 'Blood', theme: 'css/theme/blood.css' },
          { name: 'Night', theme: 'css/theme/night.css' }
        ],
        markers:true,
        transitions: false,
      },
      // Optional reveal.js plugins
      dependencies: [
        { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'plugin/zoom-js/zoom.js', async: true },
        { src: 'plugin/notes/notes.js', async: true }
      ]
    });

    // Load reveal.js-menu plugin
    $.getScript("plugin/menu/menu.js");//.done(function(data,status){});
    $("[data-btn='menu']").off("click").on("click",function(event){
      event.preventDefault();
      RevealMenu.toggle(event);
    });

    $(".reveal [data-btn^='view-']").off("click").on("click",function(event){
      event.preventDefault();
      var index = Reveal.getIndices();
      if($(event.target).parent().data("btn") == "view-down"){
        console.log("down");
        Reveal.slide(index.h,index.v+1);
      }else if($(event.target).parent().data("btn") == "view-up"){
        console.log("up");
        Reveal.slide(index.h,index.v-1);
      }
    });

    Reveal.addEventListener("ready",function(e1){
      $(e1.currentSlide).children().find(".header").addClass("animated fadeIn");
      $(".header").css(merge_props([vendor_animation_duration("2s"),vendor_animation_delay("0.75s"),vendor_animation_iteration_count("1")]));

      $(e1.currentSlide).children().find("[data-btn='menu']").parent().addClass("animated fadeInUp");
      $("[data-btn='menu']").parent().css(merge_props([vendor_animation_duration("1s"),vendor_animation_delay("1.5s"),vendor_animation_iteration_count("1")]));

      if(e1.indexh == 0 && e1.indexv == 0){$("[data-btn^='view-']").hide();}
      else{$("[data-btn^='view-']").show();}

      if(e1.indexv == 0){$("[data-btn='view-up']").hide();}
      else{$("[data-btn='view-up']").show();}

      Reveal.addEventListener("slidechanged",function(e2){
        $(e2.previousSlide).children().find(".header").removeClass("animated");
        $(e2.previousSlide).children().find("[data-btn='menu']").parent().removeClass("animated");

        for (i in animations){
          $(e2.previousSlide).children().find(".header").removeClass(animations[i]);
          $(e2.previousSlide).children().find("[data-btn='menu']").parent().removeClass(animations[i]);
        }

        $(e2.currentSlide).children().find(".header").addClass("animated fadeIn");
        $(e2.currentSlide).children().find("[data-btn='menu']").parent().addClass("animated fadeInUp");

        if(e2.indexh == 0){$("[data-btn^='view-']").hide();}
        else{$("[data-btn^='view-']").show();}

        if(e2.indexv == 0){$("[data-btn='view-up']").hide();}
        else{$("[data-btn='view-up']").show();}

      });
    });
  });
})(jQuery);
