var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

if (localStorage.getItem("login") === "true") {
  $(".button").css("display", "block");
  if (localStorage.getItem("disease") === "Fabry") {
    console.log("Fabry");
    $("#sickle-cell-disease").css("display", "none");
    $("#pompe-disease").css("display", "none");
  } else if (localStorage.getItem("disease") === "Pompe") {
    $("#sickle-cell-disease").css("display", "none");
    $("#fabry-disease").css("display", "none");
    $("#pompe-disease").css("display", "block");
  } else {
    $("#pompe-disease").css("display", "none");
    $("#fabry-disease").css("display", "none");
    $("#sickle-cell-disease").css("display", "block");
  }
} else {
  $(".button").css("display", "none");
}

function fabry_meet() {
  window.location.href =
    "https://neev0511.github.io/gdgpsvk_hackathon/fabry_meet.html";
}
function sickle_cell_meet() {
  window.location.href =
    "https://neev0511.github.io/gdgpsvk_hackathon/sickle_cell_meet.html";
}
function pompe_meet() {
  window.location.href =
    "https://neev0511.github.io/gdgpsvk_hackathon/pompe_meet.html";
}
function nutrion_meet() {
  window.location.href =
    "https://neev0511.github.io/gdgpsvk_hackathon/nutrion_meet.html";
}
