const inputNode = document.querySelector("#word");

const addButton = document.querySelector(".add");
const mapButton = document.querySelector(".map");
const filterButton = document.querySelector(".filter");
const sortButton = document.querySelector(".sort");

const listNode = document.querySelector(".list");

let array = [];
let word = [];

function update(eachArray) {
  listNode.innerHTML = "";
  listNode.classList.add("active");

  eachArray.forEach((data) => {
    if (data.trim().length > 0) {
      let listItem = document.createElement("li");
      listItem.textContent = data;
      listNode.appendChild(listItem);
    }
  });
}

addButton.addEventListener("click", () => {
  word = inputNode.value;
  array.push(word);

  update(array);
  inputNode.value = "";
});

mapButton.addEventListener("click", () => {
  let upperArray = array.map((data) => {
    return data.toUpperCase();
  });
  // console.log(array);
  // console.log(upperArray);

  update(upperArray);
});

filterButton.addEventListener("click", () => {
  let filterArray = array.filter((data) => {
    return data.length >= 5;
  });
  // console.log(array);
  // console.log(filterArray);

  update(filterArray);
});

sortButton.addEventListener("click", () => {
  let sortArray = array.sort();
  // console.log(array);
  // console.log(sortArray);

  update(sortArray);
});
