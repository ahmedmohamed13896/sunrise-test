$( document ).ready(function() {
 $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth:120,
    itemMargin:5,
    asNavFor: '#slider'
  });
 
  $('.products-slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
  
  
   $('.products-slider1').flexslider({
    animation: "slide"
  });
   
$(function () {
thisyear = new Date().getFullYear();
$('.currentyear').text(thisyear);
});
});
