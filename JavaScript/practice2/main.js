const searchButton = document.querySelector("#search");
const resultBox = document.querySelector(".result-container");
const API_KEY = "98e79f5f8ca244ce994fa51568399af3";
var url =
  "https://newsapi.org/v2/everything?" +
  "q=Apple&" +
  "from=2024-10-04&" +
  "sortBy=popularity&" +
  "apiKey=${API_KEY}";

var req = new Request(url);

fetch(req).then(function (response) {
  console.log(response.json());
});
