
(function($, win) {
    $.fn.inViewport = function(cb) {
       return this.each(function(i,el){
         function visPx(){
           var H = $(this).height() + 100,
               r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
           return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
         } visPx();
         $(win).on("resize scroll", visPx);
       });
    };
  }(jQuery, window));

$(document).ready(function() {


  $("#porcelenaDescription").inViewport(function(px){
      if(px) {
          $("#porcelenaDescription").addClass("fadeInUp");
          $("#porcelenaDescription").css("opacity", "1");
      }
  });

  $("#porcelenaTimelineContent").inViewport(function(px){
      if(px) {
          $("#porcelenaTimelineContent").addClass("bounce-in");
          $("#porcelenaTimelineContent").css("opacity", "1");
      }
  });

  $("#porcelenaProjectContent").inViewport(function(px){
      if(px) {
          $("#porcelenaProjectContent").addClass("fadeInLeft");
          $("#porcelenaProjectContent").css("opacity", "1");
      }
  });


  $("#paintingDescription").inViewport(function(px){
    if(px) {
        $("#paintingDescription").addClass("fadeInUp");
        $("#paintingDescription").css("opacity", "1");
    }
  });

  $("#paintingTimelineContent").inViewport(function(px){
    if(px) {
        $("#paintingTimelineContent").addClass("bounce-in");
        $("#paintingTimelineContent").css("opacity", "1");
    }
  });

  $("#paintingProjectContent").inViewport(function(px){
    if(px) {
        $("#paintingProjectContent").addClass("fadeInLeft");
        $("#paintingProjectContent").css("opacity", "1");
    }
  });


  $("#biographyDescription").inViewport(function(px){
    if(px) {
        $("#biographyDescription").addClass("fadeInUp");
        $("#biographyDescription").css("opacity", "1");
    }
  });

  $("#biographyTimelineContent").inViewport(function(px){
    if(px) {
        $("#biographyTimelineContent").addClass("bounce-in");
        $("#biographyTimelineContent").css("opacity", "1");
    }
  });

  $("#biographyProjectContent").inViewport(function(px){
    if(px) {
        $("#biographyProjectContent").addClass("fadeInLeft");
        $("#biographyProjectContent").css("opacity", "1");
    }
  });

});