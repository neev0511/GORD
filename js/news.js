const API_KEY = "b66c02de279d403a88a0e24c6323a692";

var res = [];

function getNews() {
  fetch(
    "https://newsapi.org/v2/everything?q='fabry diseases'&language=en&apiKey=b66c02de279d403a88a0e24c6323a692"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      res.push(data.articles);
    });
}

function news(res) {
  var i = 0;

  document.getElementById("contain").innerHTML = "";
  // for (let j in data) {
  //   if (
  //     data[j].urlToImage != null &&
  //     data[j].description !== "" &&
  //     (data[j].urlToImage.includes(".jpg") ||
  //       data[j].urlToImage.includes(".png") ||
  //       data[j].urlToImage.includes(".webp"))
  //   ) {
  //     res.push(data[j]);
  //   }
  // }
  while (i < 15) {
    console.log(res[i]);
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
