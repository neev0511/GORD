document.querySelector(".popup").style.display = "none";

function zoom_link() {
  var doctor = $("#doctor").val();
  var time = $("#meeting-time").val();
  var date = $("#meeting-date").val();

  $("#meeting_schedule").append(
    ` date: ` + date + ` time: ` + time + ` with Doctor ` + doctor
  );
  document.querySelector(".popup").style.display = "block";
}
