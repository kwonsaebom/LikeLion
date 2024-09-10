"use strict";

const primeTest = () => {
  let no = prompt("2 이상의 숫자를 입력하세요");
  var message = "";

  no = parseInt(no);

  if (isNaN(no) || no < 2) {
    message = "2 이상의 유효한 숫자를 입력하세요.";
  }
  if (no === 2 || no === 3) {
    message = `${no}는 소수입니다.`;
  } else {
    for (let i = 2; i < no; i++) {
      if (no % i === 0) {
        message = `${no}는 소수가 아닙니다.`;
        break;
      } else message = `${no}는 소수입니다.`;
    }
  }

  //message 는 유저에게 출력하고자 하는 문자열을 저장한 변수
  document.querySelector("#result").innerHTML = message;
};
