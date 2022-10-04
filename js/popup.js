window.addEventListener("load", function () {
  if (localStorage.getItem("login") === "true") {
    document.querySelector(".popup").style.display = "none";
  } else {
    setTimeout(function open(event) {
      document.querySelector(".popup").style.display = "block";
    }, 1000);
  }
});
document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".popup").style.display = "none";
});
