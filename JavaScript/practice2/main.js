const searchButton = document.querySelector("#search");
const inputNode = document.querySelector("#input-box");
const resultBox = document.querySelector(".result-container");
const API_KEY = "API KEY";

searchButton.addEventListener("click", () => {
  const search = inputNode.value;

  if (search.trim().length === 0) {
    alert("검색어를 입력하세요!");
    return;
  }

  resultBox.innerHTML = "";

  let url =
    "https://newsapi.org/v2/everything?" +
    `q=${search}&` +
    "sortBy=popularity&" +
    `apiKey=${API_KEY}`;

  searchWord();

  async function searchWord() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    if (data.totalResults === 0) {
      alert("검색 결과가 없습니다!");
      return;
    }

    data.articles.forEach((article) => {
      if (
        article.title.trim() !== "[Removed]" &&
        article.author &&
        article.urlToImage
      ) {
        console.log(article);

        const newNode = document.createElement("div");
        newNode.setAttribute("class", "article-container");
        newNode.innerHTML = `
        <div class="container-left">
          <h3 class="article-title">${article.title}</h3>
          <i class="article-info">${article.author} - ${article.publishedAt} - <a href="${article.url}">more</a></i>
          <p class="article-content">${article.content}</p>
        </div>
        <div class="container-right">
          <img class="article-image" src="${article.urlToImage}"/>
        </div>`;

        resultBox.appendChild(newNode);
      }
    });
  }
});
