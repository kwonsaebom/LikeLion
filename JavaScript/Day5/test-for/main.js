"use strict";

for (let i = 1; i <= 9; i++) {
  document.write("<div>");
  document.write(`<h3>${i}단</h3>`); // 문자열 템플릿을 사용할 때는 중괄호를 포함하여 전체를 백틱(`)으로 감싸야 함

  for (let j = 1; j <= 9; j++) {
    document.write(`${i}X${j}=${i * j}<br>`); // 각 결과를 줄바꿈
  }
  document.write("</div>");
}
