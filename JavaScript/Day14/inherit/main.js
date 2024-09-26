function School(kor, eng) {
  this.kor = kor;
  this.eng = eng;
}

School.prototype.sum = function () {
  return this.kor + this.eng;
};
School.prototype.avg = function () {
  return (this.kor + this.eng) / 2;
};

let school1 = new School(100, 85);
console.log("school sum = ", school1.sum());
console.log("school average = ", school1.avg());

function HighSchool(kor, eng) {
  School.apply(this, [kor, eng]);
}

HighSchool.prototype = School.prototype;

HighSchool.prototype.grade = function () {
  let result = "";
  let avg = this.avg();

  if (avg >= 90) result = "A";
  else if (avg >= 80) result = "B";
  else if (avg >= 70) result = "C";
  else if (avg >= 60) result = "D";
  else result = "F";

  return result;
};

let high1 = new HighSchool(80, 85);
console.log("highschool sum = ", high1.sum());
console.log("highschool average = ", high1.avg());
console.log("highschool grade = ", high1.grade());
