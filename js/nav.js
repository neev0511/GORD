// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
let dropdown1 = document.querySelector(".dropdown1");
dropdown1.onclick = function () {
  navLinks.classList.toggle("show1");
};
let dropdown2 = document.querySelector(".dropdown2");
dropdown2.onclick = function () {
  navLinks.classList.toggle("show3");
};

if (localStorage.getItem("login") === "true") {
  document.querySelector(".login_account").style.display = "inline-block";
} else {
  document.querySelector(".login_account").style.display = "none";
}

function logout() {
  console.log("logging out");
  localStorage.setItem("login", false);
  window.alert("You have been logged out");
  location.reload();
}

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 00) {
    $("nav").css("background", "#3E8DA8");
    $(".sub-menu").css("background", "#3E8DA8");
    $("nav").css("box-shadow", "0 10px 20px rgba(0, 0, 0, 0.2)");
    $(".navbar .links li .sub-menu a").css("color", "#fff");
    $(".navbar .links li a").css("color", "#fff");
    $(".navbar .logo a").css("color", "#fff");
    $("nav .navbar .links li .arrow").css("color", "#fff");
  } else {
    $("nav").css("background", "transparent");
    $("nav").css("box-shadow", "none");
    $(".sub-menu").css("background", "transparent");
    $(".navbar .links li .sub-menu a").css("color", "#000");
    $(".navbar .links li a").css("color", "#000");
    $(".navbar .logo a").css("color", "#000");
    $("nav .navbar .links li .arrow").css("color", "#000");
  }
});

// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();
//   if (scroll > 00) {
//     $("nav").css("background", "#131418");
//     $(".has-dropdown ul").css("background", "#131418");
//     $("nav").css("color", "#f2f5f7");
//     $(".nav-links li a").css("color", "#f2f5f7");
//     $("nav").css("box-shadow", "0 3px 20px rgba(0, 0, 0, 0.2)");
//   } else {
//     $("nav").css("background", "transparent");
//     $(".has-dropdown ul").css("background", "transparent");
//     $("nav").css("color", "black");
//     $(".nav-links li a").css("color", "black");
//     $("nav").css("box-shadow", "none");
//   }
// });
