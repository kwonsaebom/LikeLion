const nameNode = document.querySelector("#name");
const hobbyNodes = document.querySelectorAll("input[name='hobby']");
const genderNodes = document.querySelectorAll("input[name='gender']");

const container = document.querySelector("#container");

const signButton = document.querySelector("#signUp");
const cancelButton = document.querySelector("#cancel");

signButton.addEventListener("click", () => {
  const name = nameNode.value;
  let hobby = [];
  let gender = "";

  hobbyNodes.forEach((node) => {
    if (node.checked) {
      hobby.push(node.value);
    }
  });

  genderNodes.forEach((node) => {
    if (node.checked) {
      gender = node.value;
    }
  });

  let hobbyList = hobby.join(", ");

  const newNode = document.createElement("p");
  newNode.innerHTML = `이름: ${name} <br/> 성별: ${gender}<br/> 취미: ${hobbyList}`;
  container.appendChild(newNode);
});
