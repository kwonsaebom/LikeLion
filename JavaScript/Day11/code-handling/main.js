let result1 = document.getElementById("result1");
result1.innerHTML = `<div><a href="#">Link</a>Hello</div>`;

let newDiv = document.createElement("div");

let newA = document.createElement("a");

let newHref = document.createAttribute("href");
newHref.value = "#";

let newAText = document.createTextNode("link");
let newDivText = document.createTextNode("hello");

newDiv.appendChild(newA);
newA.appendChild(newDivText);

let result2 = document.getElementById(result2);
result2.appendChild(newDiv);
