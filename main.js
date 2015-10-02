(function($){
  // List of animation classes
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
  "slideOutDown","slideOutLeft","slideOutRight","slideOutUp",
  "animated"];

  // Css object for animation duration
  var vendor_animation_duration = function(i){
    var s = {
      "-webkit-animation-duration" : i,
      "-moz-animation-duration" : i,
      "-o-animation-duration" : i,
      "animation-duration" : i
    };
    return s
  }

  // Css object for animation delay
  var vendor_animation_delay = function(i){
    var s = {
      "-webkit-animation-delay" : i,
      "-moz-animation-delay" : i,
      "-o-animation-delay" : i,
      "animation-delay" : i
    };
    return s;
  }

  // Css object for animation iteration count
  var vendor_animation_iteration_count = function(i){
    var s = {
      "-webkit-animation-iteration-count" : i,
      "-moz-animation-iteration-count" : i,
      "-o-animation-iteration-count" : i,
      "animation-iteration-count" : i
    };
    return s;
  }

  // Function to merge css objects
  function merge_props(obj){
    var obj3 = {};
    for (var o in obj) {
      for (var attrname in obj[o]) { obj3[attrname] = obj[o][attrname]; }
    }
    return obj3;
  }

  // Handle the nav buttons when slide changes
  // Takes Revealjs event
  function handle_nav_buttons(e){
    $("[data-btn^='nav-']").hide();
    if ($(e.currentSlide).parent().is("section")){
      var noofsec = $(e.currentSlide).parent().children().length - 1;
      switch(e.indexh){
        case 0:
          $("[data-btn^='nav-']").show();
          switch(e.indexv){
            case 0:
              $("[data-btn^='nav-']").hide();
              break;
            case noofsec:
              $("[data-btn='nav-down']").hide();
              break;
            default:
              $("[data-btn='nav-top']").hide();
              break;
          }
          break;

        default:
          $("[data-btn^='nav-']").show();
          switch(e.indexv){
            case 0:
              $("[data-btn='nav-up']").hide();
              $("[data-btn='nav-top']").hide();
              break;
            case noofsec:
              $("[data-btn='nav-down']").hide();
              break;
            default:
              $("[data-btn='nav-top']").hide();
              break;
          }
          break;
      }
    }
  }

  function add_animation_rules(){
    $(".header").css(merge_props([vendor_animation_duration("2s"),vendor_animation_delay("0.75s"),vendor_animation_iteration_count("1")]));
    $("[data-btn='menu']").parent().css(merge_props([vendor_animation_duration("1s"),vendor_animation_delay("1.5s"),vendor_animation_iteration_count("1")]));
  }

  function add_animation_classes(e){
    $(e.currentSlide).children().find(".header").addClass("animated fadeIn");
    $(e.currentSlide).children().find("[data-btn='menu']").parent().addClass("animated fadeInUp");
  }

  function remove_animation_classes(e,animations){
    var cls = animations.join(" ");
    $(e.previousSlide).children().find(".header").removeClass(cls);
    $(e.previousSlide).children().find("[data-btn='menu']").parent().removeClass(cls);
  }


  // main function
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
      touch: false,
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
        { src: 'plugin/notes/notes.js', async: true },
        { src: 'plugin/menu/menu.js'}
      ]
    });

    $("[data-btn='menu']").off("click").on("click",function(event){
      event.preventDefault();
      RevealMenu.toggle(event);
    });

    $(".reveal [data-btn^='nav-']").off("click").on("click",function(event){
      event.preventDefault();
      var index = Reveal.getIndices();
      switch($(event.target).parent().data("btn")){
        case "nav-down":
          Reveal.slide(index.h,index.v+1);
          break;
        case "nav-up":
          Reveal.slide(index.h,index.v-1);
          break;
        case "nav-top":
          Reveal.slide(index.h,0);
          break;
      }
    });

    Reveal.addEventListener("ready",function(e1){
      add_animation_rules();
      add_animation_classes(e1);
      handle_nav_buttons(e1);

      Reveal.addEventListener("slidechanged",function(e2){
        remove_animation_classes(e2,animations);
        add_animation_classes(e2);
        handle_nav_buttons(e2);
      });
    });
  });
})(jQuery);
