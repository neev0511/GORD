function city() {
  res = [
    {
      name: "Max Super Speciality Hospital, Saket",
      address:
        "No. 1, 2, Press Enclave Road, Mandir Marg, Saket Institutional Area, Saket 110017 New Delhi",
      city: "Delhi NCR",
      contact: "1126515050",
      image: "images/comp_1.jpeg",
    },
    {
      name: "Max Super Speciality Hospital, Patparganj",
      address: "108A, I.P.Extension, Patparganj, 110092 New Delhi",
      city: "Delhi NCR",
      contact: "1143033333",
      image: "images/comp_2.jpeg",
    },
    {
      name: "Max Super Speciality Hospital, Shalimar Bagh",
      address:
        "C and D Block, Shalimar Place Site, Shalimar Bagh, 110088 New Delhi",
      city: "Delhi NCR",
      contact: "1166422222",
      image: "images/comp_3.jpeg",
    },
    {
      name: "Max Multi Speciality Centre, Panchsheel Park",
      address:
        "N 110, Block N, Panchsheel Park North, Panchsheel Park, 110017 New Delhi , DL India",
      city: "Delhi NCR",
      contact: "1146097200",
      image: "images/comp_4.jpeg",
    },
    {
      name: "Max Multi Speciality Centre, Pitampura",
      address:
        "A-2 , 3 & 4, PP Tower, Netaji Subhash Marg, District Centre, Wazirpur 110034 New Delhi , DL India",
      city: "Delhi NCR",
      contact: "1147351844",
      image: "images/comp_5.jpeg",
    },
    {
      name: "Max Smart Super Speciality Hospital, Saket",
      address:
        "Press Enclave Road, Saket Institutional Area, Saket, Mandir Marg 110017 New Delhi , DL, India",
      city: "Delhi NCR",
      contact: "1126515050",
      image: "images/comp_1.jpeg",
    },
    {
      name: "Max Institute of Cancer Care-Lajpat Nagar",
      address: "26A, Ring Road, Lajpat Nagar, 110024 New Delhi , India",
      city: "Delhi NCR",
      contact: "1130751000",
      image: "images/comp_2.jpeg",
    },
    {
      name: "Max Medcentre (Immigration Check) , Lajpat Nagar",
      address:
        "1st floor, 26A, Ring Rd, Vikram Vihar, Lajpat Nagar IV, 110024 Lajpat Nagar IV , DL India",
      city: "Delhi NCR",
      contact: "1130751000",
      image: "images/comp_3.jpeg",
    },
    {
      name: "Max Super Speciality Hospital, Mohali",
      address:
        "Near Civil Hospital, Chandigarh Road, Phase 6, 160055 Sahibzada Ajit Singh Nagar , PB India",
      city: "Mohali",
      contact: "0172-5212000",
      image: "images/comp_4.jpeg",
    },
    {
      name: "Max Super Speciality Hospital, Bathinda",
      address:
        "Mansa Road, Near District Civil Hospital, 151001 Bathinda , PB, India",
      city: "Bathinda",
      contact: "0164-5212000",
      image: "images/comp_5.jpeg",
    },
    {
      name: "Max Super Speciality Hospital, Dehradun",
      address: "Dehradun Mussoorie Diversion Road, 248 001 Dehradun , UK India",
      city: "Dehradun",
      contact: "7302003000",
      image: "images/comp_1.jpeg",
    },
    {
      name: "Max Multi Speciality Centre, Noida",
      address: "A-364, Sector 19, 201301 Noida , UP India",
      city: "Delhi NCR",
      contact: "120 6629999",
      image: "images/comp_2.jpeg",
    },
    {
      name: "Max Hospital, Gurgaon",
      address:
        "Sushant Lok 1, Near Huda City Centre 122001 Gurugram , HR India",
      city: "Delhi NCR",
      contact: "1246623111",
      image: "images/comp_3.jpeg",
    },
    {
      name: "Max Multi Speciality Hospital, Greater Noida",
      address:
        "Plot No. 4A, Sector Institutional Green Opposite NTPC, Lakhnawali 201306 Greater Noida , UP, India",
      city: "Delhi NCR",
      contact: "1207161234",
      image: "images/comp_4.jpeg",
    },
    {
      name: "Max Super Speciality Hospital, Vaishali",
      address:
        "W-3, Near Radisson Blu Hotel, Sector 1, Vaishali, 201012 Ghaziabad , UP India",
      city: "Delhi NCR",
      contact: "4188000",
      image: "images/comp_5.jpeg",
    },
    {
      name: "Max Medcentre, Saharanpur",
      address: "Bajoria road near petrol pump, 247001 Saharanpur , UP India",
      city: "Saharanpur",
      contact: "9760569178",
      image: "images/comp_1.jpeg",
    },
    {
      name: "Max Medcentre, Srinagar",
      address:
        "Noor Mall Complex Gole Market Karan Nagar, 190010 Srinagar , JK India",
      city: "Srinagar",
      contact: "9797224638",
      image: "images/comp_2.jpeg",
    },
  ];
  city = document.getElementById("city").value;
  console.log(city);
  for (var i = 0; i < 17; i++) {
    console.log(res[i].city);
    if (city === "All") {
      $("#path").append(
        `
                <div class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="` +
          res[i].image +
          `" class="card-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">` +
          res[i].name +
          `</h5>
                  <p class="card-text">
                    Address: ` +
          res[i].address +
          ` <br/>
                   Contact No:  ` +
          res[i].contact +
          `
                  </p>
                  <div
                    class="btn btn-primary request"
                    onclick="request_test()"
                  >
                    Request
                  </div>
                </div>
              </div>
            </div>
          </div>
                `
      );
    } else {
      if (city === res[i].city) {
        console.log("===");
        $("#path").append(
          `
            <div class="card mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="` +
            res[i].image +
            `" class="card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">` +
            res[i].name +
            `</h5>
              <p class="card-text">
                ` +
            res[i].address +
            ` <br/>
                ` +
            res[i].contact +
            `
              </p>
              <div
                class="btn btn-primary request"
                onclick="request_test()"
              >
                Request
              </div>
            </div>
          </div>
        </div>
      </div>
            `
        );
      }
    }
  }
  if (localStorage.getItem("login") === "true") {
    $(".request").css("display", "inline-block");
  } else {
    $(".request").css("display", "none");
  }
}
