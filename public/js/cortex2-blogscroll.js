

// ********* GLOBALS *********

var servicetop = $(".blog-container").offset().top;
var scrollpos = $(window).scrollTop();


// ********* WHEN WINDOW SCROLLS *********

$(window).scroll(_.debounce(function(){
    showHamburgerPastServices();
},50));

function showHamburgerPastServices(){
  scrollpos = $(window).scrollTop();
  if (scrollpos > servicetop) {
    $(".fixed-topbar-hamburger").addClass("fixed-topbar-hamburger-show");
  }
  else {
    $(".fixed-topbar-hamburger").removeClass("fixed-topbar-hamburger-show");
  }
}


 // ************** SMOOTH SCROLL  **************

 $('a[href^="#"]').on('click', function(event) {
   var target = $(this.getAttribute('href'));
   if( target.length ) {
     event.preventDefault();
     $('html, body').stop().animate({
       scrollTop: target.offset().top
     }, 1000);
     $(".sidebar-menu").removeClass("sidebar-menu-open");
   }
 });





// COMMENT
