function displayChange(img) {
  if (img.id === "chatbot_img") {
    document.getElementById("chatbot_img").style.display = "none";
    document.getElementById("chat_ui").style.display = "block";
  } else {
    document.getElementById("chatbot_img").style.display = "block";
    document.getElementById("chat_ui").style.display = "none";
  }
}

input = document.getElementById("input_question");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    keyboard();
  }
});
// FAQs
// Variables
var more_less = 0;
var questions = 0;

// Background Functions

function main_menu() {
  $(".wrapper").append(
    '<div class="main box"><div class="text"><div class="main-text">Have any questions 🙋‍♂️</div><ul><div class="line"></div><li><button style="text-align: left" onclick="start_FAQs()">FAQs</button></li><div class="line"></div><li><button onclick="input_focus()">Type a question</button></li><div class="line"></div><div class="margin"></div></ul></div></div><br />'
  );
}

function faqs() {
  $(".wrapper").append(`
  <div class="main box">
  <div class="text">
    <div class="main-text">FAQs</div>
    <ul>
      <div class="line"></div>
      <li>
        <button onclick="what_is_rare_disease()">What is a rare disease</button>
      </li>
      <div class="line"></div>
      <li>
        <button onclick="no_rare_disease()">
          How many rare diseases are known today?
        </button>
      </li>
      <div class="line"></div>
      <li>
        <button onclick="rare_disease_day()">What is Rare Disease Day?</button>
      </li>
      <div class="line"></div>
      <li>
        <button onclick="pathlab()">To which path labs does GORD connect its patients?</button>
      </li>
      <div class="line"></div>
      <div class="margin">x</div>
    </ul>
  </div>
</div>
<br />

  `);
}

function answer(ans) {
  // Answer
  $(".wrapper").append(
    '<div class="box"><div class="text"><div class="main-text">' +
      ans +
      "</div></div></div></br>"
  );
}
function user_question(ques) {
  //   User Question
  $(".wrapper").append(
    '<div class="box-user"><div class="text"><div class="main-text" id=>' +
      ques +
      "</div></div></div><br />"
  );
}

// Functions For Questions

function start_FAQs() {
  user_question("FAQs");
  faqs();
}

function input_focus() {
  document.getElementById("input_question").focus();
}

function keyboard() {
  var question = document.getElementById("input_question").value;
  document.getElementById("input_question").value = "";
  question_query = question.toLowerCase();
  question_query = question_query.replace("?", "").replace(".", "");
  const query = question_query.split(" ");
  console.log(query);
  if (query.includes("")) {
  } else {
    user_question(question);
  }

  // Lots of ifs
  if (query.includes("")) {
  } else if (
    query.includes("faq") ||
    query.includes("faqs") ||
    query.includes("question") ||
    query.includes("questions")
  ) {
    faqs();
  } else if (
    query.includes("thank") ||
    query.includes("thanks") ||
    query.includes("thx")
  ) {
    answer("You are welcome!");
  } else if (query.includes("menu")) {
    main_menu();
  } else if (
    query.includes("what") &&
    (query.includes("waste") ||
      query.includes("ewaste") ||
      query.includes("e-waste")) &&
    query.includes("is")
  ) {
    answer(
      "E-waste is the discarded electronic appliances such as mobile phones, computers, and televisions."
    );
  } else if (query.includes("hi") || query.includes("hello")) {
    answer("Hi 👋");
  } else if (query.includes("what") && query.includes("name")) {
    answer("I am a chatbot and dont have a name");
  } else {
    answer(
      "I am unable to answer this at the moment. However we will have our support staff contact you for the query."
    );
    main_menu();
  }
}

// Questions
function what_is_e_waste() {
  user_question("What is E-Waste?");
  answer(
    "E-waste is the discarded electronic appliances such as mobile phones, computers, and televisions."
  );
  main_menu();
}

function what_is_rare_disease() {
  user_question("What is a rare disease?");
  answer(
    "By definition, a rare disease occurs infrequently in a population, but there is no universal definition. In the USA, a rare or orphan disease is defined strictly according to its prevalence, specifically ” any disease or condition that affects less than 200,000 persons in the United States,” or about 1 in 1,500 people. European Union (EU) considers diseases affecting fewer than 1 in 2,000 persons to be rare. In Japan a rare disease is defined as affecting not more than 1 in 2500 people. Considering the population of India the suggested threshold for India for a disease to be defined as rare is 1 in 10,000."
  );
  main_menu();
}

function no_rare_disease() {
  user_question("How many rare diseases are known today?");
  answer(
    "It is estimated that approximately 7,000 rare diseases known to exist."
  );
  main_menu();
}

function rare_disease_day() {
  user_question("What is Rare Disease Day?");
  answer(
    "Rare Disease Day is an annual global event on the last day of February to focus attention on rare diseases as a public health concern."
  );
  main_menu();
}

function pathlab() {
  user_question("To which path labs does GORD connect its patients?");
  answer(
    "Currently, we have collaborated with the 17 branches of max lab. In future, we look to tie with more pathology labs across India."
  );
  main_menu();
}
