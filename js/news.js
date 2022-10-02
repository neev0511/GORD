const API_KEY = "b66c02de279d403a88a0e24c6323a692";

function getNews() {
  fetch(
    "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=" +
      API_KEY
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // This is the JSON from our response
      console.log(data.articles);
      news(data.articles);
    })
    .catch(function (err) {
      // There was an error
      console.warn("Something went wrong.", err);
    });
}

function news(data) {
  var i = 0;
  var res = [];

  document.getElementById("contain").innerHTML = "";
  for (let j in data) {
    if (
      data[j].urlToImage != null &&
      data[j].description !== "" &&
      (data[j].urlToImage.includes(".jpg") ||
        data[j].urlToImage.includes(".png") ||
        data[j].urlToImage.includes(".webp"))
    ) {
      res.push(data[j]);
    }
  }
  console.log(res);
  while (i < parseInt(document.getElementById("news").value)) {
    $("#contain").append(
      `
        <a class="white" href="` +
        res[i].url +
        `">
            <div class="card">
                <div class="card__header">
                <img src="` +
        res[i].urlToImage +
        `" alt="card__image" class="card__image" width="600" />
                </div>
                <div class="card__body">
                <h4>` +
        res[i].title +
        `</h4>
                <p>` +
        res[i].description +
        `</p>
                </div>
            </div>
        </a>
    `
    );
    i++;
  }
}
getNews();
