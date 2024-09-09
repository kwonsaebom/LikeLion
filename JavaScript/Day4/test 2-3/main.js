let age = prompt();

if (age === null) {
  console.log("입력을 취소하였습니다.");
} else if (isNaN(age)) {
  console.log("숫자가 아닌 문자를 입력 하셨습니다.");
} else if (0 < age && age < 10) {
  console.log("어린이군요");
} else if (10 <= age && age < 20) {
  console.log("청소년이군요");
} else if (20 <= age && age < 100) {
  console.log("어른이군요");
} else {
  console.log("1이상, 100이하의 숫자를 입력해야 합니다.");
}
