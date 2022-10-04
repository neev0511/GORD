const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 00) {
    $("nav").css("background", "#131418");
    $("nav").css("color", "#f2f5f7");
    $(".nav-links li a").css("color", "#f2f5f7");
    $("nav").css("box-shadow", "0 3px 20px rgba(0, 0, 0, 0.2)");
  } else {
    $("nav").css("background", "transparent");
    $("nav").css("color", "black");
    $(".nav-links li a").css("color", "black");
    $("nav").css("box-shadow", "none");
  }
});
