const inputNode = document.getElementById("input");

const addButton = document.getElementById("add");
const container = document.getElementById("container");

const ulNode = document.createElement("ul");

container.appendChild(ulNode);

addButton.addEventListener("click", () => {
  const toDo = inputNode.value;

  if (toDo.trim() !== "") {
    const liNode = document.createElement("li");

    liNode.style.borderBottom = "1px solid blue";
    liNode.style.width = "fit-content";
    liNode.style.padding = "0 5px";
    liNode.style.margin = "10px";
    liNode.style.cursor = "pointer";

    const liText = document.createTextNode(toDo);
    liNode.appendChild(liText);

    ulNode.insertBefore(liNode, ulNode.childNodes[0]);

    inputNode.value = "";

    liNode.addEventListener("click", () => {
      liNode.remove(); // liNode가 if 문 안에서 정의되었기 때문
    });
  }
});
