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

  if (this.avg >= 90) result = "A";
  else if (this.avg >= 80 && this.avg < 90) result = "B";
  else if (this.avg >= 70 && this.avg < 80) result = "C";
  else if (this.avg >= 60 && this.avg < 70) result = "D";
  else result = "D";

  return result;
};

let high1 = new HighSchool(100, 85);
console.log("highschool sum = ", high1.sum());
console.log("highschool average = ", high1.avg());
console.log("highschool grade = ", high1.grade());
