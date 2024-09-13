const idMsg = document.querySelector(".id-msg");
const pwMsg = document.querySelector(".pw-msg");

let isIdValid = false;
let isPwValid = false;

let id = "";
let pw = "";

function idValidCheck() {
  const idNode = document.querySelector("#ID");
  id = idNode.value;

  if (id === null || id.trim().length == 0) {
    isIdValid = false;
    idMsg.innerHTML = "아이디를 입력하세요.";
  } else {
    isIdValid = true;
    idMsg.innerHTML = "";
  }
}

function pwValidCheck() {
  const regExgPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;

  const pwNode = document.querySelector("#PW");
  pw = pwNode.value;
  if (pw === null || pw.trim().length === 0) {
    isPwValid = false;
    pwMsg.innerHTML = "패스워드를 입력하세요";
  } else if (!regExgPassword.test(pw)) {
    isPwValid = false;
    pwMsg.innerHTML = "패스워드는 영문자, 숫자 조합에 6자 이상입니다.";
  } else {
    isPwValid = true;
    pwMsg.innerHTML = "";
  }
}

function login() {
  idValidCheck();
  pwValidCheck();
  if (isIdValid && isPwValid) {
    let resultMsg = document.querySelector(".result-msg");
    resultMsg.innerHTML = `${id}님이 로그인을 시도합니다`;
  }
}
