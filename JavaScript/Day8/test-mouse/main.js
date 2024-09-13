const inputId = document.querySelector("#ID");
const inputPw = document.querySelector("#PW");
const idMsg = document.querySelector(".id-msg");
const pwMsg = document.querySelector(".pw-msg");
const resultMsg = document.querySelector(".result-msg");

const loginButton = document.querySelector(".login");
const form = document.querySelector(".form");

function inputText(node) {
  if (node === idMsg) {
    node.textContent = "아이디는 필수 입력입니다";
  } else if (node === pwMsg) {
    node.textContent = `비밀번호는 6~16자리, 영문 및 숫자를 포함해야 합니다`;
  } else if (node === resultMsg) {
    node.textContent = `${inputId.value}님이 로그인을 시도합니다.`;
  }
}
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let regExgPassword = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;

  idMsg.textContent = "";
  pwMsg.textContent = "";

  if (inputId.value === "" && !regExgPassword.test(inputPw.value)) {
    inputText(idMsg);
    inputText(pwMsg);
  } else if (inputId.value === "") {
    regExgPassword.test(inputPw.value);
    inputText(idMsg);
  } else if (!regExgPassword.test(inputPw.value)) {
    inputText(pwMsg);
  } else {
    inputText(resultMsg);
    document.body.appendChild(resultMsg);
  }
});
