"use strict";

let i = 1;

while (i <= 9) {
  let j = 1;

  document.write("<div>");
  document.write(`<h3>${i}단</h3>`);

  while (j <= 9) {
    document.write(`${i} X ${j} = ${i * j}<br>`);
    j++;
  }

  document.write("</div>");
  i++;
}
