function calcBonus(name, position, salary) {
  let bonus;

  if (position === "A") {
    bonus = salary * 0.3;
  } else if (position === "B") {
    bonus = salary * 0.2;
  } else if (position === "C") {
    bonus = salary * 0.1;
  }
  return `${name}의 추석 보너스는 ${bonus} 입니다.`;
}

console.log(calcBonus("홍길동", "A", 1000));
console.log(calcBonus("김길동", "B", 500));
