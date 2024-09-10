"use strict";

const body = document.querySelector("body");

for (let i = 1; i <= 9; i++) {
  const border = document.createElement("div");
  const dan = document.createElement("h3");

  dan.textContent = `${i}단`;
  border.appendChild(dan);

  for (let j = 1; j <= 9; j++) {
    const result = document.createElement("p");

    result.textContent = `${i}X${j}=${i * j}`;
    border.appendChild(result);
  }
  body.appendChild(border);
}
