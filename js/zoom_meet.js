document.querySelector(".popup").style.display = "none";

function zoom_link() {
  var doctor = $("#doctor").val();
  var time = $("#meeting-time");
  var date = $("#meeting-date");
  var timings = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
  ];
  var ends;
  for (var i = 0; i < 58; i++) {
    ends = time.val().endsWith(timings[i]);
    if (ends === true) {
      break;
    }
  }
  if (
    time.val() === "" ||
    date.val() === "" ||
    time.val().startsWith("19") ||
    time.val().startsWith("20") ||
    time.val().startsWith("21") ||
    time.val().startsWith("22") ||
    time.val().startsWith("23") ||
    time.val().startsWith("00") ||
    time.val().startsWith("01") ||
    time.val().startsWith("02") ||
    time.val().startsWith("03") ||
    time.val().startsWith("04") ||
    time.val().startsWith("05") ||
    time.val().startsWith("06") ||
    time.val().startsWith("07") ||
    time.val().startsWith("08") ||
    ends === true
  ) {
    document.querySelector(".popup").style.display = "none";
  } else {
    $("#meeting_schedule").append(
      ` date: ` + date.val() + ` time: ` + time.val() + ` with ` + doctor
    );
    document.querySelector(".popup").style.display = "block";
  }
}
