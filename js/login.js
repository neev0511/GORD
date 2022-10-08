const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};
document.getElementById("registration").addEventListener("click", register());

function register() {
  var name = document.getElementById("register-name").value;
  var email = document.getElementById("register-email").value;
  var password = document.getElementById("register-password").value;
  var location = document.getElementById("register-location").value;
  var blood_group = document.getElementById("register-blood-group").value;
  var age = document.getElementById("register-age").value;
  const e = document.getElementById("diseases");
  const disease = e.value;
  const f = document.getElementById("gender");
  const gender = f.value;

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("location", location);
  localStorage.setItem("blood_group", blood_group);
  localStorage.setItem("age", age);
  localStorage.setItem("disease", disease);
  localStorage.setItem("gender", gender);

  document.getElementById("register-name").value = "";
  document.getElementById("register-email").value = "";
  document.getElementById("register-password").value = "";
  document.getElementById("register-location").value = "";
  document.getElementById("register-blood-group").value = "";
  document.getElementById("register-age").value = "";
  window.alert("You have successfully signed up");
}

function login() {
  var email = document.getElementById("login-email").value;
  var password = document.getElementById("login-password").value;
  real_email = localStorage.getItem("email");
  real_password = localStorage.getItem("password");
  if (email == real_email && password == real_password) {
    document.getElementById("login-password").value = "";
    document.getElementById("login-email").value = "";
    localStorage.setItem("login", true);
    window.alert("You have been logged in");
    window.location.href = "https://neev0511.github.io/gdgpsvk_hackathon/";
  } else {
    document.getElementById("login-password").value = "";
    document.getElementById("login-email").value = "";
    window.alert("Incorrect email or password entered");
  }
}
