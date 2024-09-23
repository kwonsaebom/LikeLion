const user = {
  img: "img.jpg",
  name: "김철수",
  message: "객체 테스트",

  userMsg: function () {
    console.log(`${this.img}, ${this.name}, ${this.message}`);
  },
};

user.img = "newImage.jpg";
user.name = "홍길동";
user.message = "디버깅 용도로 많이 사용합니다";

user.userMsg();
