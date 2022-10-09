$("#name").append(" " + localStorage.getItem("name"));
$("#email").append(" " + localStorage.getItem("email"));
$("#location").append(" " + localStorage.getItem("location"));
$("#age").append(" " + localStorage.getItem("age"));
$("#gender").append(" " + localStorage.getItem("gender"));
$("#blood_group").append(" " + localStorage.getItem("blood_group"));
$("#disease").append(" " + localStorage.getItem("disease"));
$("#phone").append(" " + localStorage.getItem("phone"));
$("#user").append(" " + localStorage.getItem("user"));

if (
  localStorage.getItem("plan") === "1" ||
  localStorage.getItem("plan") === "2" ||
  localStorage.getItem("plan") === "3"
) {
  plan(parseInt(localStorage.getItem("plan")));
} else {
  if (localStorage.getItem("user") === "Patient") {
    $("#plans").append("Select Plan: ");
    $("#cards").append(`
  <div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">Method 1</h5>
    <p class="card-text">
      PAY 7% payment of the cost per year <br />
      GET 15% discount from our collaborated company
    </p>
    <button href="#" class="btn btn-primary" onclick="plan(1)">
      Select
    </button>
  </div>
</div>
<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">Method 2</h5>
    <p class="card-text">
      BUY shares worth 5% of total cost of drug from one of our
      collaborated companies<br />
      GET 15% discount from our collaborated company
    </p>
    <button href="#" class="btn btn-primary" onclick="plan(1)">
      Select
    </button>
  </div>
</div>
    `);
  } else {
    $("#plans").append("Select Plan: ");
    $("#cards").append(`
    <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Method</h5>
      <p class="card-text">
        PAY 200 per month <br />
        GET access to tutorials and webinars from world class doctors
      </p>
    <button href="#" class="btn btn-primary" onclick="plan(3)">
      Select
    </button>
  </div>
</div>
    `);
  }
}

function plan(num) {
  document.getElementById("plans").innerHTML = "";
  document.getElementById("cards").innerHTML = "";
  $("#plans").append("Selected Plan: ");
  if (num === 1) {
    $("#cards").append(`
    <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Method 1</h5>
      <p class="card-text">
        PAY 7% payment of the cost per year <br />
        GET 15% discount from our collaborated company
      </p>
    </div>
  </div>
      `);
    localStorage.setItem("plan", "1");
  } else if (num === 2) {
    $("#cards").append(`
    </div>
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Method 2</h5>
        <p class="card-text">
          BUY shares worth 5% of total cost of drug from one of our
          collaborated companies<br />
          GET 15% discount from our collaborated company
        </p>
      </div>
    </div>
      `);
    localStorage.setItem("plan", "2");
  } else {
    $("#cards").append(`
    <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Method</h5>
      <p class="card-text">
        PAY 200 per month <br />
        GET access to tutorials and webinars from world class doctors
      </p>
    </div>
  </div>
    `);
    localStorage.setItem("plan", "3");
  }
}
