document.addEventListener('DOMContentLoaded', function() {
    // Wrap your showslides code in this event listener
    function showslides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      // Check to see that slides are present
      if(!slides || slides.length === 0) {
        console.error("No slides found. Please verify that your HTML contains elements with class mySlides");
        return;
      }
      for (i = 0; i < slides.length; i++) {
        // Check that each slide element exists.
        if (!slides[i]) {
          console.error("Element at index " + i + " in slides is undefined");
          return;
        }
        // Make sure we are only accessing style on valid elements
        if (slides[i] && slides[i].style) {
          slides[i].style.display = "none"; // Now safe to access style
        } else {
          console.error("Cannot access the style property of slide " + i + ". Verify your mySlides class elements in your HTML");
        }
      }
    }
  });
$(document).ready(function() {
    $("h3").click(function(){
        $(this).hide();
    });
});

$(document).ready(function() {
    $("button").click(function() {
        $("#p1").css("color", "green").slideUp(2000).slideDown(2000);
    });
});

$(document).ready(function(){
    $("h2").click(function(){
        $(this).hide();
    });
});

