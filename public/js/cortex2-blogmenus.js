
$(".fixed-topbar-hamburger").on("click", function(){
  $(".sidebar-menu").addClass("sidebar-menu-open");
  $(".contact-form-icon").addClass("contact-form-icon-hide");
  $(".contact-form").removeClass("contact-form-visible");
});

$(".topbar-hamburger").on("click", function(){
  $(".sidebar-menu").addClass("sidebar-menu-open");
  $(".contact-form-icon").addClass("contact-form-icon-hide");
  $(".contact-form").removeClass("contact-form-visible");
});

$(".sidebar-close").on("click", function(){
  $(".sidebar-menu").removeClass("sidebar-menu-open");
  $(".contact-form-icon").removeClass("contact-form-icon-hide");
});
