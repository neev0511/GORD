document.querySelector(".popup").style.display = "none";

function zoom_link() {
  var doctor = $("#doctor");
  var time = $("#meeting-time");
  var date = $("#meeting-date");
  console.log(time.length, date.length);
  if (time.val() === "" || date.val() === "") {
    document.querySelector(".popup").style.display = "none";
  } else {
    $("#meeting_schedule").append(
      ` date: ` + date.val() + ` time: ` + time.val() + ` with Doctor ` + doctor
    );
    document.querySelector(".popup").style.display = "block";
  }
}
