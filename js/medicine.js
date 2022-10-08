if (localStorage.getItem("login") === "true") {
  $(".request").css("display", "inline-block");
} else {
  $(".request").css("display", "none");
}

function request_medicine() {
  window.alert(
    "We have recieved your request and our support staff will contact you within 24 hours"
  );
}
