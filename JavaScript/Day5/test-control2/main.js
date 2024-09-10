"use strict";

const primeTest = () => {
  let no = prompt("2 이상의 숫자를 입력하세요");
  let primeNumber = [];
  let error = false;
  var message = "";

  no = parseInt(no);

  if (isNaN(no) || no < 2) {
    error = true;
  } else {
    for (let i = 2; i <= no; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime === true) {
        primeNumber.push(i);
      }
    }
  }

  if (error === true) {
    message = "2 이상의 유효한 숫자를 입력하세요.";
  } else {
    message = primeNumber.join(", ");
  }

  //message 는 유저에게 출력하고자 하는 문자열을 저장한 변수
  document.querySelector("#result").innerHTML = message;
};
